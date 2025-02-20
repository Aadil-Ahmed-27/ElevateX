import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { styles } from '../styles/ProfileScreen.styles';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

interface ProfileData {
  name: string;
  about: string;
  profileImage: string | null;
}

const ProfileScreen = () => {
  // Initialize states with proper types
  const [name, setName] = useState<string>('Adithya S');
  const [about, setAbout] = useState<string>('Aspiring Software Developer | Full Stack Developer | Machine Learning');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<number>(0);
  const [followers, setFollowers] = useState<number>(0);
  const [following, setFollowing] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'posts' |'startups'>('posts');

  // Get updated profile data from route params when returning from edit screen
  const params = useLocalSearchParams();
  React.useEffect(() => {
    if (params.updatedName && typeof params.updatedName === 'string') {
      setName(params.updatedName);
    }
    if (params.updatedAbout && typeof params.updatedAbout === 'string') {
      setAbout(params.updatedAbout);
    }
    if (params.updatedImage && typeof params.updatedImage === 'string') {
      setProfileImage(params.updatedImage);
    }
  }, [params]);

  const handleEditProfile = () => {
    router.push({
      pathname: '/edit-profile',
      params: {
        currentName: name,
        currentAbout: about,
        currentImage: profileImage
      }
    });
  };

  const handleRegisterStartup = () => {
    router.push('/register-startup');
  };


  const renderHeader = () => (
    <>
      <View style={styles.profileHeader}> 
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image 
              source={{ uri: profileImage }} 
              style={styles.profileImage}
            />
          ) : (
            <Image 
              source={require('../assets/images/profilepic.jpg')} 
              style={styles.profileImage}
            />
          )}
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.about}>{about}</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleRegisterStartup}>
          <Text style={styles.buttonText}>Register Startup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          onPress={() => setActiveTab('posts')} 
          style={[styles.tabButton, activeTab === 'posts' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setActiveTab('startups')} 
          style={[styles.tabButton, activeTab === 'startups' && styles.activeTab]}
        >
          <Text style={styles.tabText}>Startups</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <Text style={styles.placeholderText}>User's posts will appear here.</Text>;
      case 'startups':
        return (
          <FlatList
            data= {['Startup 1', 'Startup 2', 'Startup 3']}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.modalItem}>{item}</Text>}
            ListHeaderComponent={renderHeader}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {activeTab === 'startups' ? (
        renderContent()
      ) : (
        <FlatList
          data={[]}
          renderItem={null}
          ListHeaderComponent={
            <>
              {renderHeader()}
              {renderContent()}
            </>
          }
        />
      )}
      {/* Floating button to create a new post */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/create")}
      >
        <Ionicons name="add-circle" size={48} color="#0077b5" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;