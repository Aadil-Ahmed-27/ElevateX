import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const CreateScreen = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
  
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.canceled && result.assets?.length > 0) {
        console.log(result.assets[0].uri);
      }
    } else {
      alert('Camera permission is required to use this feature.');
    }
  };

  const openMediaPicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (status !== 'granted') {
      alert('Media library permission is required.');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      const fileName = uri.split('/').pop();
      if (!fileName) {
        console.error('Failed to extract file name from URI');
        return;
      }
      const fileType = fileName.split('.').pop();
  
      const formData = new FormData();
      const response = await fetch(uri);
      const blob = await response.blob();
      formData.append('file', blob, fileName);
  
      try {
        const response = await fetch('http://your-backend-url/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        const data = await response.json();
        console.log('Upload Success:', data);
      } catch (error) {
        console.error('Upload Error:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}>
          <MaterialIcons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Share your thoughts..."
        multiline
        placeholderTextColor="#666"
      />

      <View style={styles.actionContainer}>
        <View style={styles.actionGrid}>
          <ActionButton icon="photo-camera" label="Media" onPress={openCamera} />
          <ActionButton icon="file-upload" label="Upload" onPress={openMediaPicker} />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default CreateScreen;


const ActionButton = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    <View style={styles.iconButton}>
      <MaterialIcons name={icon} size={24} color="#666" />
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  postButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  postText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  actionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 16,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '33.33%',
    alignItems: 'center',
    marginVertical: 12,
  },
  iconButton: {
    width: 48,
    height: 48,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
});
