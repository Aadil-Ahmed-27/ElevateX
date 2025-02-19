import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type ForumPost = {
  id: number;
  title: string;
  content: string;
  username: string;
  userAvatar: string;
  tags: string[];
};

type Comment = {
  id: number;
  username: string;
  userAvatar: string;
  comment: string;
};

const samplePosts: ForumPost[] = [
  {
    id: 1,
    title: "How do I secure my cloud infrastructure?",
    content:
      "I've been looking for ways to secure our AWS environment. What are some best practices for cloud security?",
    username: "Alice",
    userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    tags: ["cybersecurity", "cloud"],
  },
];

const sampleComments: Comment[] = [
  {
    id: 1,
    username: "Bob",
    userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    comment: "I recommend starting with AWS’s Well-Architected Framework.",
  },
  {
    id: 2,
    username: "Charlie",
    userAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
    comment: "Don’t forget to enforce least-privilege access policies.",
  },
  {
    id: 3,
    username: "Diana",
    userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
    comment: "Multi-factor authentication is a must!",
  },
];

export default function ForumDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const post = samplePosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text>Post not found.</Text>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View style={styles.postHeaderInfo}>
          <Text style={styles.postUsername}>{post.username}</Text>
          <Text style={styles.postTitle}>{post.title}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      <View style={styles.tagContainer}>
        {post.tags.map((tag) => (
          <View key={tag} style={styles.postTag}>
            <Text style={styles.tagText}>#{tag}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.commentsTitle}>Comments</Text>
    </View>
  );

  const renderComment = ({ item }: { item: Comment }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.userAvatar }} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentUsername}>{item.username}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#0077b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post Details</Text>
      </View>

      {/* FlatList for entire screen */}
      <FlatList
        data={sampleComments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderComment}
        ListHeaderComponent={renderHeader} // Post details as header
        contentContainerStyle={styles.commentsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    paddingTop: Platform.OS === "ios" ? 40 : 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212529",
  },
  postContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postHeaderInfo: {
    flex: 1,
  },
  postUsername: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
  },
  postTitle: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 4,
  },
  postContent: {
    fontSize: 16,
    color: "#212529",
    marginVertical: 12,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  postTag: {
    backgroundColor: "#e9ecef",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: "#495057",
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
    marginTop: 16,
  },
  commentsList: {
    paddingBottom: 16,
  },
  commentContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentUsername: {
    fontSize: 14,
    fontWeight: "600",
    color: "#212529",
  },
  commentText: {
    fontSize: 14,
    color: "#495057",
    marginTop: 4,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { ForumDetailScreen };