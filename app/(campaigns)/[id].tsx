// CampaignDetailScreen.tsx
import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { getCampaigns, Campaign } from "./campaignStore";

const charityImage = require("../../assets/images/charity.jpg");
const graph = require("../../assets/images/graph.jpg");

export default function CampaignDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    async function loadCampaign() {
      const campaigns = await getCampaigns();
      const found = campaigns.find((c) => c.id.toString() === id);
      if (found) {
        setCampaign(found);
      }
    }
    loadCampaign();
  }, [id]);

  if (!campaign) {
    return (
      <View style={styles.centered}>
        <Text>Campaign not found.</Text>
      </View>
    );
  }

  const handleInvest = () => {
    // For the prototype, simply show an alert.
    alert("Invest functionality coming soon!");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#0077b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Campaign Detail</Text>
      </View>

      {/* Campaign Card */}
      <View style={styles.card}>
        {campaign.image && (
          <Image source={ charityImage } style={styles.campaignImage} />
        )}
        <View style={styles.cardContent}>
          <Text style={styles.campaignTitle}>{campaign.title}</Text>
          <Text style={styles.campaignCreator}>By {campaign.creator}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Goal (INR)</Text>
              <Text style={styles.statValue}>
                {(campaign.goal || 0).toLocaleString()}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Raised</Text>
              <Text style={styles.statValue}>
                {(campaign.raised || 0).toLocaleString()}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Days Left</Text>
              <Text style={styles.statValue}>
                {(campaign.daysLeft || 0).toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Funding Trends Graph */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Funding Trends</Text>
        {/* For prototype, using a placeholder image for the graph */}
        <Image
          source={ graph }
          style={styles.graphImage}
        />
      </View>

      {/* About the Startup */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Startup</Text>
        <Text style={styles.aboutText}>Location: New York, USA</Text>
        <Text style={styles.aboutText}>Founder: John Doe</Text>
        <Text style={styles.aboutText}>Advisor: Jane Smith</Text>
        <Text style={styles.aboutText}>
          Description: TechNova is a cutting-edge startup focused on innovative technology solutions that disrupt traditional industries.
        </Text>
      </View>

      {/* Invest Now Button */}
      <View style={styles.investContainer}>
        <TouchableOpacity style={styles.investButton} onPress={handleInvest}>
          <Text style={styles.investButtonText}>Invest Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f7f8fa" 
  },
  centered: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e9f0",
  },
  backButton: { 
    paddingRight: 8 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: "600", 
    color: "#212529" 
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  campaignImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0077b5",
    marginBottom: 4,
  },
  campaignCreator: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#e1e9f0",
    paddingVertical: 8,
  },
  statItem: {
    alignItems: "center",
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
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0077b5",
    marginBottom: 8,
  },
  graphImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#eaeaea",
  },
  aboutText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  investContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  investButton: {
    backgroundColor: "#0077b5",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  investButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { CampaignDetailScreen };
