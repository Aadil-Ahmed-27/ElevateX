import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import  styles  from "../styles/SearchScreen.styles";

type SearchResult = {
  id: number;
  type: "person" | "startup";
  name: string;
  avatar: string;
  position?: string;
  tagline?: string;
};

const persons: SearchResult[] = [
  {
    id: 1,
    type: "person",
    name: "John Doe",
    avatar: require('../assets/images/john.png'),
    position: "Student",
  },
  {
    id: 2,
    type: "person",
    name: "Jane Smith",
    avatar: require('../assets/images/jane.png'),
    position: "Investor",
  },
  {
    id: 3,
    type: "person",
    name: "Alex Johnson",
    avatar: require('../assets/images/alex.png'),
    position: "Industry Official",
  },
];

const startups: SearchResult[] = [
  {
    id: 1,
    type: "startup",
    name: "Malcom Company",
    avatar: require('../assets/images/malcom.jpg'),
    tagline: "Innovating the Future",
  },
  {
    id: 2,
    type: "startup",
    name: "Cybersec Solutions",
    avatar: require('../assets/images/cybersec.jpg'),
    tagline: "Sustainable Solutions",
  },
];

const combinedResults: SearchResult[] = [...persons, ...startups];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = combinedResults.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }: { item: SearchResult }) => {
    const linkPath =
      item.type === "person" 
        ? `/(persons)/${item.id}` 
        : `/(startups)/${item.id}`;

    return (
      <Link href={linkPath} asChild>
        <TouchableOpacity style={styles.itemContainer}>
          <Image source={item.avatar } style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            {item.type === "person" ? (
              <Text style={styles.subText}>{item.position}</Text>
            ) : (
              <Text style={styles.subText}>{item.tagline}</Text>
            )}
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6c757d" />
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <Ionicons name="search" size={24} color="#0077b5" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search profiles and startups..."
          placeholderTextColor="#6c757d"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <FlatList
        data={filteredResults}
        keyExtractor={(item) => `${item.type}-${item.id}`}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.noResults}>No results found.</Text>
        }
      />
    </View>
  );
};

export default SearchScreen;