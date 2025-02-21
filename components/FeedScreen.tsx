import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StatusBar,
  SafeAreaView 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from '../styles/FeedScreen.styles';

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.userInfo}>
      <Image 
        source={{ uri: post.userAvatar }} 
        style={styles.avatar}
      />
      <View style={styles.userTextInfo}>
        <Text style={styles.userName}>{post.userName}</Text>
        <Text style={styles.userTitle}>{post.userTitle}</Text>
      </View>
    </View>

    <Image 
      source={post.image}  
      style={styles.postImage}
      resizeMode="contain"
    />

    <View style={styles.engagementStats}>
      <View style={styles.reactions}>
        <View style={styles.reactionIcons}>
          <Text>👍❤️👏</Text>
          <Text style={styles.reactionCount}>{post.reactions}</Text>
        </View>
        <Text style={styles.commentCount}>{post.comments} comments</Text>
      </View>
    </View>

    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.actionButton}>
        <Feather name="thumbs-up" size={24} color="#666" />
        <Text style={styles.actionText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Feather name="message-circle" size={24} color="#666" />
        <Text style={styles.actionText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Feather name="send" size={24} color="#666" />
        <Text style={styles.actionText}>Send</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/images/logo.jpg')}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={() => router.push('/notifications')}
      >
        <View style= {
          {width: 40, 
          height: 40,  
          justifyContent: 'center', 
          alignItems: 'center', 
          marginLeft: 70,
          overflow: 'hidden'
          }
        }>
          <Feather name="bell" size={24} color="#666" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={() => router.push('/profile')}
      >
        <View style= {
          {width: 40, 
          height: 40, 
          borderRadius: 40, 
          backgroundColor: '#f8f8f8', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginRight: 20,
          overflow: 'hidden'
          }
        }>
          <Image 
            source={require('../assets/images/profilepic.jpg')}
            style = {{width: '100%',
              height: '100%',
              borderRadius: 40}}  
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const FeedScreen = () => {
  const posts = [
    {
      id: 1,
      userName: "Alex Johnson",
      userTitle: "#1 in the world for Careers & Coaching On LinkedIn | Ad...",
      userAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
      image: require('../assets/images/promotion.jpg'),
      reactions: "14,590",
      comments: "250"
    },
    {
      id: 2,
      userName: "John Doe",
      userTitle: "Senior Software Engineer | Tech Lead",
      userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
      image: require('../assets/images/final.jpg'),
      reactions: "8,432",
      comments: "156"
    },
    {
      id: 3,
      userName: "Jane Smith",
      userTitle: "Product Manager | Innovation Lead",
      userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
      image: require('../assets/images/meeting.jpg'),
      reactions: "5,789",
      comments: "98"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <ScrollView>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;