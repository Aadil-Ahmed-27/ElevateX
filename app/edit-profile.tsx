import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

interface EditProfileParams {
  currentName?: string;
  currentAbout?: string;
  currentImage?: string;
}

const EditProfileScreen = () => {
    const router = useRouter();
    const params = useLocalSearchParams<EditProfileParams>();
    
    // Initialize states with proper types
    const [newName, setNewName] = useState<string>(params.currentName || 'Adithya S');
    const [newAbout, setNewAbout] = useState<string>(params.currentAbout || '');
    const [newImage, setNewImage] = useState<string | null>(params.currentImage || null);
  
    const pickImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
  
        if (!result.canceled) {
          setNewImage(result.assets[0].uri);
        }
      } catch (error) {
        console.error('Error picking image:', error);
      }
    };
  
    const handleSave = () => {
      router.push({
        pathname: '/profile',
        params: {
          updatedName: newName,
          updatedAbout: newAbout,
          updatedImage: newImage,
        }
      });
    };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={pickImage} style={styles.profileImageContainer}>
            {newImage ? (
              <Image source={{ uri: newImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.profileImagePlaceholder} />
            )}
          </TouchableOpacity>
          
          <View style={styles.profileInfoContainer}>
            <Text style={styles.label}>Change Profile Photo</Text>
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput 
            style={styles.input} 
            value={newName}
            onChangeText={setNewName}
            placeholder="Enter your name"
            placeholderTextColor="#666"
          />

          <Text style={styles.label}>About</Text>
          <TextInput 
            style={[styles.input, styles.aboutInput]} 
            value={newAbout}
            onChangeText={setNewAbout}
            placeholder="Tell us about yourself"
            placeholderTextColor="#666"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f2f5'
  },
  profileInfoContainer: {
    flex: 1
  },
  inputSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8
  },
  input: {
    fontSize: 14,
    color: '#000',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  aboutInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttonsContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  buttonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500'
  }
});

export default EditProfileScreen;