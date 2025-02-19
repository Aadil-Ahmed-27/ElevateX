import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/PersonProfile.styles";

export const ProfileHeader = ({ title, onBack }: { title: string; onBack: () => void }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Ionicons name="chevron-back" size={24} color="#0077b5" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

export const ProfileDetails = ({ person }: { person: any }) => (
  <View>
    <Image source={{ uri: person.avatar }} style={styles.avatar} />
    <Text style={styles.name}>{person.name}</Text>
    <Text style={styles.position}>{person.position}</Text>
    <Text style={styles.description}>{person.description}</Text>

    <View style={styles.statusContainer}>
      <Text style={styles.statusLabel}>Status: </Text>
      <Text style={styles.status}>{person.status}</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionContent}>{person.about}</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        {person.skills.map((skill: string, index: number) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      {person.education.map((edu: any, index: number) => (
        <View key={index} style={styles.educationItem}>
          <Text style={styles.educationInstitution}>{edu.institution}</Text>
          <Text style={styles.educationDetails}>
            {edu.degree} - {edu.year}
          </Text>
        </View>
      ))}
    </View>
  </View>
);

export const ProfileActivity = ({ activity }: { activity: any[] }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Activity</Text>
    {activity.map((post) => (
      <View key={post.id} style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image source={{ uri: post.authorAvatar }} style={styles.postAuthorAvatar} />
          <View style={styles.postAuthorInfo}>
            <Text style={styles.postAuthorName}>{post.authorName}</Text>
            <Text style={styles.postAuthorHeadline}>{post.authorHeadline}</Text>
            {post.followers && <Text style={styles.postAuthorFollowers}>{post.followers}</Text>}
            <Text style={styles.postDate}>{post.date}</Text>
          </View>
        </View>

        <Text style={styles.postText}>{post.text}</Text>
        {post.image && <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />}

        <View style={styles.postFooter}>
          <Text style={styles.engagementText}>
            {post.likes} Likes • {post.comments} Comments • {post.shares} Shares
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
    ))}
  </View>
);
