import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MessageInput from './MessageInput';

type ChatMessage = {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
};

const sampleChats: Record<string, ChatMessage[]> = {
  '1': [
    { id: 1, sender: 'John Doe', message: 'Hello there!', timestamp: '2025-02-14T14:00:00.000Z' },
    { id: 2, sender: 'You', message: 'Hi John, how are you?', timestamp: '2025-02-14T14:05:00.000Z' },
  ],
  '2': [
    { id: 1, sender: 'Jane Smith', message: 'Are you available for a meeting tomorrow?', timestamp: '2025-02-14T09:00:00.000Z' },
  ],
  '3': [
    { id: 1, sender: 'Alex Johnson', message: 'Hello there!', timestamp: '2025-02-14T14:00:00.000Z' },
    { id: 2, sender: 'You', message: 'Hi Alex, how are you?', timestamp: '2025-02-14T14:05:00.000Z' },
  ],
};

const sampleContacts: Record<string, { name: string; avatar: string }> = {
  '1': { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  '2': { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  '3': { name: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
};

const ChatScreen = function () {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const [messages, setMessages] = useState<ChatMessage[]>(sampleChats[id] || []);
  const contact = sampleContacts[id] || { name: 'Unknown', avatar: '' };

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'You',
      message,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => {
    const isOutgoing = item.sender === 'You';
    return (
      <View style={[styles.messageContainer, isOutgoing ? styles.messageOutgoing : styles.messageIncoming]}>
        <Text style={[styles.messageText, isOutgoing && styles.outgoingText]}>{item.message}</Text>
        <Text style={[styles.messageTimestamp, isOutgoing && styles.outgoingTimestamp]}>
          {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#0077b5" />
        </TouchableOpacity>
        <View style={styles.contactHeader}>
          <Image source={{ uri: contact.avatar }} style={styles.contactAvatar} />
          <Text style={styles.contactName}>{contact.name}</Text>
        </View>
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContent}
      />

      {/* Message Input */}
      <MessageInput onSend={handleSend} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f8fa' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  backButton: { paddingRight: 8 },
  contactHeader: { flexDirection: 'row', alignItems: 'center' },
  contactAvatar: { width: 42, height: 42, borderRadius: 21, marginRight: 12 },
  contactName: { fontSize: 18, fontWeight: '600', color: '#212529' },
  chatContent: { padding: 16, paddingBottom: 80 },
  messageContainer: { marginBottom: 16, padding: 12, borderRadius: 12, maxWidth: '75%' },
  messageIncoming: { backgroundColor: '#e9ecef', alignSelf: 'flex-start' },
  messageOutgoing: { backgroundColor: '#0077b5', alignSelf: 'flex-end' },
  messageText: { fontSize: 15, color: '#212529' },
  messageTimestamp: { fontSize: 11, marginTop: 6, color: '#6c757d', alignSelf: 'flex-end' },
  outgoingText: { color: '#fff' },
  outgoingTimestamp: { color: '#dfe2e6' },
});
