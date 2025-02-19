import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import StartupProfile from "../../components/StartupProfile"; // Importing the profile component

const startups = [
  {
    id: 1,
    name: "Malcom Company",
    logo: "https://via.placeholder.com/150x150.png?text=Malcom+Logo",
    coverPhoto: "https://via.placeholder.com/1000x300.png?text=Malcom+Cover",
    tagline: "Advancing Cybersecurity Through Crowdsourced Expertise",
    description:
      "Malcom Company focuses on cutting-edge cybersecurity solutions, providing a robust platform for threat detection and prevention.",
    founder: "John Doe",
    advisor: "Jane Smith",
    founded: "2015",
    location: "Chennai, Tamil Nadu",
    website: "https://malcomcompany.com",
    employees: 50,
    industry: "Computer and Network Security",
    followers: 272,
    posts: [
      {
        id: 1,
        text: "Looking for an internship in Python, Web Dev, or FPGA Engineering?",
        date: "5d",
        likes: 30,
        comments: 5,
        shares: 2,
      },
      {
        id: 2,
        text: "Penetrate, Exploit, Secure, and Evolve - Redefining Cyber Resilience",
        date: "1w",
        image: "https://via.placeholder.com/600x400.png?text=Cyber+Resilience",
        likes: 45,
        comments: 12,
        shares: 3,
      },
    ],
  },
];

const StartupProfileScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const startup = startups.find((s) => s.id === parseInt(id || "0", 10));

  if (!startup) {
    return (
      <View style={styles.centered}>
        <Text>Startup not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <StartupProfile startup={startup} />;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupProfileScreen;
