import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Startup } from "../data/startups";
import { styles } from "../styles/StartupProfile.styles";

type StartupProfileProps = {
  startup: Startup;
};

export const StartupProfile: React.FC<StartupProfileProps> = ({ startup }) => {
  const router = useRouter();

  const renderPost = ({ item }: { item: string }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#0077b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Startup Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{ uri: startup.logo }} style={styles.logo} />
        <Text style={styles.name}>{startup.name}</Text>
        <Text style={styles.tagline}>{startup.tagline}</Text>
        <Text style={styles.description}>{startup.description}</Text>
        <Text style={styles.sectionTitle}>Founder</Text>
        <Text style={styles.detailText}>{startup.founder}</Text>
        <Text style={styles.sectionTitle}>Advisor</Text>
        <Text style={styles.detailText}>{startup.advisor}</Text>
        <View style={styles.analytics}>
          <TouchableOpacity onPress={() => router.push(`/(analytics)/analysis`)}>
            <Text style={styles.sectionTitle1}>Analytics</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Posts</Text>
        <FlatList
          data={startup.posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPost}
          contentContainerStyle={styles.postsList}
        />
        <View style={styles.analytics}>
          <TouchableOpacity>
            <Text style={styles.sectionTitle1}>Query Assitant🤖</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};