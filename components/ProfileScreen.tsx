import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert, FlatList, Share } from 'react-native';
import { styles } from '../styles/ProfileScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('ElevateX');
  const [headline, setHeadline] = useState('Aspiring Software Developer | CIT 27 CSE-AIML | Full Stack Developer | Machine Learning | 400+ Leetcode Problems | Second Year at Chennai Institute Of Technology');
  const [posts, setPosts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [activeTab, setActiveTab] = useState('posts');

  const startups = ['Startup Profile 1', 'Startup Profile 2', 'Startup Profile 3'];

  const handleRegisterStartup = () => {
    router.push('/register-startup');
  };

  const renderHeader = () => (
    <>
      <View style={styles.profileHeader}> 
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImagePlaceholder} />
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.headline}>{headline}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>{posts} posts</Text>
        <Text style={styles.statsText}>{followers} followers</Text>
        <Text style={styles.statsText}>{following} following</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('editprofile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegisterStartup}>
          <Text style={styles.buttonText}>Register Startup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('posts')} style={[styles.tabButton, activeTab === 'posts' && styles.activeTab]}>
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('saved')} style={[styles.tabButton, activeTab === 'saved' && styles.activeTab]}>
          <Text style={styles.tabText}>Saved Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('startups')} style={[styles.tabButton, activeTab === 'startups' && styles.activeTab]}>
          <Text style={styles.tabText}>Startups</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <Text style={styles.placeholderText}>User's posts will appear here.</Text>;
      case 'saved':
        return <Text style={styles.placeholderText}>User's saved posts will appear here.</Text>;
      case 'startups':
        return (
          <FlatList
            data={startups}
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
    </SafeAreaView>
  );
};

export default ProfileScreen;