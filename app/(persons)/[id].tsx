import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import  personsData from "../../data/persons";
import { ProfileHeader, ProfileDetails, ProfileActivity } from "../../components/PersonProfile";
import styles from "../../styles/PersonProfile.styles";

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
    <ScrollView style={styles.container}>
      <ProfileHeader title="Profile" onBack={() => router.back()} />
      <View style={styles.profileContainer}>
        <ProfileDetails person={person} />
        <ProfileActivity activity={person.activity} />
      </View>
    </ScrollView>
  );
}
