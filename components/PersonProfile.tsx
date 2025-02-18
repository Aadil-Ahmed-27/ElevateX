import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Person } from "../data/persons";
import { styles } from "../styles/PersonProfile.styles";

type PersonProfileProps = {
  person: Person;
};

export const PersonProfile: React.FC<PersonProfileProps> = ({ person }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
};