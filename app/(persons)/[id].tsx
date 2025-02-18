import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Person = {
  id: number;
  name: string;
  avatar: string;
  position: string;
  description: string;
};

const personsData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Student",
    description: "John is a dedicated student focusing on computer science and AI.",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "Investor",
    description: "Jane is an experienced investor who has funded several successful startups.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    position: "Industry Official",
    description: "Alex is an industry official with years of experience in tech and innovation.",
  },
];

export default function PersonProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const person = personsData.find((p) => p.id.toString() === id);

  if (!person) {
    return (
      <View style={styles.centered}>
        <Text>Profile not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#0077b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: person.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.position}>{person.position}</Text>
        <Text style={styles.description}>{person.description}</Text>
      </View>
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
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
  },
  position: {
    fontSize: 16,
    color: "#6c757d",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PersonProfileScreen };
