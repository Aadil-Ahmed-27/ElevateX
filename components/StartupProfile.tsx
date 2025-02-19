import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/StartupProfile.styles";

const ProfileScreen = ({ startup }) => {
  const [activeTab, setActiveTab] = useState<"Posts" | "Jobs" | "People" | "About">("Posts");

  if (!startup) {
    return (
      <View style={styles.centered}>
        <Text>Loading startup profile...</Text>
      </View>
    );
  }

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: startup.logo }} style={styles.postLogo} />
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.postCompanyName}>{startup.name}</Text>
          <Text style={styles.postDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{item.text}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
      <View style={styles.engagementRow}>
        <Text style={styles.engagementText}>
          {item.likes} Likes • {item.comments} Comments • {item.shares} Shares
        </Text>
        <View style={styles.engagementIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="thumbs-up-outline" size={20} color="#495057" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={20} color="#495057" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="arrow-redo-outline" size={20} color="#495057" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.coverContainer}>
              <Image
                source={{ uri: startup.coverPhoto || "https://via.placeholder.com/1000x300.png?text=Cover+Photo" }}
                style={styles.coverPhoto}
              />
            </View>
            <View style={styles.companyInfoCard}>
              <Image source={{ uri: startup.logo }} style={styles.companyLogo} />
              <Text style={styles.companyName}>{startup.name}</Text>
              <Text style={styles.companyTagline}>{startup.tagline}</Text>
            </View>

            <View style={styles.tabBar}>
              {["Posts", "Jobs", "People", "About"].map((tab) => (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text style={[styles.tabItemText, activeTab === tab && styles.tabItemTextActive]}>{tab}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        }
        data={activeTab === "Posts" ? startup.posts : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
      />
    </View>
  );
};

export default ProfileScreen;