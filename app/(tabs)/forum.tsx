import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ForumPost, getForumPosts } from '../(forum)/forumstore';
import { useFocusEffect } from "@react-navigation/native";

export default function ForumScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<ForumPost[]>([]);

  // Load posts from AsyncStorage on mount
  useEffect(() => {
    async function loadPosts() {
      const storedPosts = await getForumPosts();
      setPosts(storedPosts);
    }
    loadPosts();
  }, []);

  // Re-load posts when navigating back
  useFocusEffect(
    useCallback(() => {
      async function loadPosts() {
        const storedPosts = await getForumPosts();
        setPosts(storedPosts);
      }
      loadPosts();
    }, [])
  );

  // Filter posts by search term and selected tag.
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  const availableTags = [
    "cybersecurity",
    "cloud",
    "mobile",
    "data",
    "blockchain",
    "compliance",
    "innovation",
    "certifications",
  ];

  const renderPostItem = ({ item }: { item: ForumPost }) => (
    <Link href={`/(forum)/${item.id}`} asChild>
      <TouchableOpacity style={styles.postContainer}>
        <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
        <View style={styles.postInfo}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.username}>Posted by {item.username}</Text>
          <View style={styles.tagContainer}>
            {item.tags.map((tag) => (
              <View key={tag} style={styles.postTag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#6c757d" />
      </TouchableOpacity>
    </Link>
  );

  const renderTagItem = (tag: string) => {
    const isActive = selectedTag === tag;
    return (
      <TouchableOpacity
        key={tag}
        style={[styles.tagButton, isActive && styles.tagButtonActive]}
        onPress={() => setSelectedTag((prev) => (prev === tag ? null : tag))}
      >
        <Text
          style={[styles.tagButtonText, isActive && styles.tagButtonTextActive]}
        >
          #{tag}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.searchRow}>
          <Ionicons name="search" size={24} color="#0077b5" style={styles.icon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search forum posts..."
            placeholderTextColor="#6c757d"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsRow}
        >
          {availableTags.map(renderTagItem)}
        </ScrollView>
      </View>

      {/* Forum Posts List */}
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        ListEmptyComponent={
          <Text style={styles.noResults}>No posts found.</Text>
        }
        contentContainerStyle={styles.postsList}
      />

      {/* Floating button to create a new post */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/(forum)/create")}
      >
        <Ionicons name="add-circle" size={48} color="#0077b5" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f8fa" },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    marginBottom: 10,
  },
  icon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: "#212529" },
  tagsRow: { alignItems: "center", paddingHorizontal: 2 },
  tagButton: {
    width: 120,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    backgroundColor: "#fff",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  tagButtonActive: {
    backgroundColor: "#0077b5",
    borderColor: "#0077b5",
  },
  tagButtonText: { fontSize: 14, color: "#6c757d" },
  tagButtonTextActive: { color: "#fff" },
  postsList: { padding: 20, paddingBottom: 40 },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  postInfo: { flex: 1 },
  postTitle: { fontSize: 16, fontWeight: "600", color: "#212529" },
  username: { fontSize: 14, color: "#6c757d", marginTop: 4 },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  postTag: {
    backgroundColor: "#e9ecef",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: { fontSize: 12, color: "#495057" },
  noResults: {
    textAlign: "center",
    marginTop: 20,
    color: "#6c757d",
    fontSize: 16,
  },
  createButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});

export { ForumScreen };
