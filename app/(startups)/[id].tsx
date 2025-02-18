import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { StartupProfile } from "../../components/StartupProfile";
import { startupsData } from "../../data/startups";
import { styles } from "../../styles/StartupProfile.styles";

export default function StartupProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const startup = startupsData.find((s) => s.id.toString() === id);

  if (!startup) {
    return (
      <View style={styles.centered}>
        <Text>Startup not found.</Text>
      </View>
    );
  }

  return <StartupProfile startup={startup} />;
}