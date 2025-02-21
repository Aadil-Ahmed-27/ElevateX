import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/StartupProfile.styles";
import {useRouter} from "expo-router";

const ProfileScreen = ({ startup }) => {
  const [activeTab, setActiveTab] = useState<"Posts" | "Jobs" | "People" | "About">("Posts");
  const router = useRouter();

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
        <Image source={require('../assets/images/malcom.jpg')} style={styles.postLogo} />
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.postCompanyName}>{startup.name}</Text>
          <Text style={styles.postDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{item.text}</Text>
      {item.image && <Image source={require('../assets/images/malcompost.jpg')} style={styles.postImage} />}
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
                source={require("../assets/images/cover1.jpg")}
                style={styles.coverPhoto}
              />
            </View>
            <View style={styles.companyInfoCard}>
              <Image source={require("../assets/images/malcom.jpg")} style={styles.companyLogo} />
              <Text style={styles.companyName}>{startup.name}</Text>
              <Text style={styles.companyTagline}>{startup.tagline}</Text>
            </View>

            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              flexDirection: "row", // Light background similar to LinkedIn's
            }}>
              <TouchableOpacity 
                onPress={() => router.push(`/(analytics)/analysis`)} 
                style={{
                  backgroundColor: "#0041C2", // A lighter blue tone
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 25, 
                  marginRight: 10,
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 2,
                  elevation: 2, 
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  Analytics
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push(`/AI_asst`)} 
                style={{
                  backgroundColor: "#0041C2", 
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 25,
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 2,
                  elevation: 2,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                  AI Assistant
                </Text>
              </TouchableOpacity>
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