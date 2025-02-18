import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { addForumPost, ForumPost } from '../(forum)/forumstore';

export default function CreateForumPostScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const handleSubmit = async () => {
    // For the prototype, we use a fixed username and avatar.
    const newPost: Omit<ForumPost, "id"> = {
      title,
      content,
      username: "Adam",
      userAvatar: "https://randomuser.me/api/portraits/men/10.jpg",
      // Split tags by comma, trim, and filter out empty values.
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
    };

    await addForumPost(newPost);
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Create Forum Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Post Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Post Content"
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={6}
      />
      <TextInput
        style={styles.input}
        placeholder="Tags (comma separated, e.g. cybersecurity, mobile)"
        value={tagsInput}
        onChangeText={setTagsInput}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f7f8fa",
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#212529",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#212529",
    marginBottom: 15,
  },
  multiline: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#0077b5",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export { CreateForumPostScreen };
