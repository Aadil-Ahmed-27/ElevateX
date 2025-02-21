// CampaignScreen.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const charityImage = require("../../assets/images/charity.jpg");
const adventureImage = require("../../assets/images/adventure.jpg");
const educationImage = require("../../assets/images/education.jpg");
const cinemaImage = require("../../assets/images/cinema.jpg");

// Example type; adjust fields to match your actual store
type Campaign = {
  id: number;
  title: string;
  image?: string;
  creator: string;
  goal: number;
  raised: number;
  daysLeft: number;
};

// Sample data for the prototype (replace with your store data)
const sampleCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Harivu Touching Tale of Father and Son",
    image: charityImage,
    creator: "Admin",
    goal: 300000,
    raised: 730922,
    daysLeft: 0,
  },
  {
    id: 2,
    title: "Everest Again",
    image: adventureImage,
    creator: "Anshu Jamsen",
    goal: 2500000,
    raised: 24455,
    daysLeft: 30,
  },
  {
    id: 3,
    title: "Manjunath for Students",
    image: educationImage,
    creator: "Akhil Krishna",
    goal: 200000,
    raised: 156745,
    daysLeft: 14,
  },
  {
    id: 4,
    title: "Cutthroat",
    image: cinemaImage,
    creator: "Sarthak Dasgupta",
    goal: 1000000,
    raised: 1007387,
    daysLeft: 7,
  },
];
  
// Simple progress bar component without percentage text
function ProgressBar({ progress }: { progress: number }) {
  // Ensure progress is between 0 and 1
  const widthPercentage = Math.min(Math.max(progress, 0), 1) * 100 + "%";
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBarFill, { width: widthPercentage }]} />
    </View>
  );
}

export default function CampaignScreen() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    // For this prototype, we load the sample data.
    // In production, load from your store (e.g., getCampaigns())
    setCampaigns(sampleCampaigns);
  }, []);

  const renderCampaign = ({ item }: { item: Campaign }) => {
    const { goal, raised } = item;
    // Calculate progress fraction
    const progress = goal > 0 ? raised / goal : 0;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push(`/(campaigns)/${item.id}`)}
      >
        {/* Campaign Image */}
        {item.image && (
          <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.campaignImage} />
        )}

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} />
        </View>

        {/* Campaign Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.campaignTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.creatorName}>By {item.creator}</Text>
        </View>

        {/* Funding Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Goal (INR)</Text>
            <Text style={styles.statValue}>{goal.toLocaleString()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Raised</Text>
            <Text style={styles.statValue}>{raised.toLocaleString()}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Days Left</Text>
            <Text style={styles.statValue}>{item.daysLeft}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCampaign}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push("/(campaigns)/create")}
      >
        <Ionicons name="add-circle" size={48} color="#0077b5" />
      </TouchableOpacity>
    </View>
  );
}

// For single column layout, we don't need to calculate card width dynamically.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa", // Light background similar to LinkedIn
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff", // White card
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  campaignImage: {
    width: "100%",
    height: 150, // Adjust height for single-column view
    resizeMode: "cover",
  },
  progressContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  progressBarContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#0077b5",
  },
  infoContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  campaignTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#212529",
    marginBottom: 4,
  },
  creatorName: {
    fontSize: 14,
    color: "#6c757d",
  },
  statsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 12,
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    color: "#6c757d",
    marginBottom: 2,
  },
  statValue: {
    fontSize: 12,
    color: "#0077b5",
    fontWeight: "600",
  },
  createButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});

export { CampaignScreen };
