// CreateCampaignScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Campaign, addCampaign } from "./campaignStore";

export default function CreateCampaignScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [imageUri, setImageUri] = useState("");

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const numericGoal = parseFloat(goal) || 0;
    const newCampaign: Omit<Campaign, "id" | "raised"> = {
      title,
      description,
      image: imageUri || "https://via.placeholder.com/600x300.png?text=New+Campaign",
      goal: numericGoal,
      creator: "John Doe", // Use creator instead of startup
      daysLeft: 30, // Add a default value for daysLeft
    };
    await addCampaign(newCampaign);
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Create Campaign</Text>
      <TextInput
        style={styles.input}
        placeholder="Campaign Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Campaign Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Funding Goal (e.g. 50000)"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {imageUri ? "Change Image" : "Pick an Image"}
        </Text>
      </TouchableOpacity>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.previewImage} />
      ) : null}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f3f6f9",
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
    borderColor: "#e1e9f0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#212529",
    marginBottom: 15,
  },
  multiline: {
    height: 80,
    textAlignVertical: "top",
  },
  imagePickerButton: {
    backgroundColor: "#0077b5",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#fff",
    fontSize: 16,
  },
  previewImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
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

export { CreateCampaignScreen };
