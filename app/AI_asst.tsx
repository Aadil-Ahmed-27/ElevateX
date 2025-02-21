import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator, Keyboard, } from "react-native";
import  styles  from "../styles/AIScreen.styles";

type Message = {
    text: string;
    type: "user" | "ai";
    timestamp: string;
};

const AIAssistant = () => {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const API_URL = "http://192.168.252.133:8000";
  
    useEffect(() => {
      fetchMessages();
    }, []);
  
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${API_URL}/messages/`);
        if (!response.ok) throw new Error('Failed to fetch messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };
  
    const handleQuery = async () => {
      if (!query.trim()) return;
      
      Keyboard.dismiss();
      setIsLoading(true);
  
      const userMessage: Message = {
        text: query.trim(),
        type: "user",
        timestamp: new Date().toISOString()
      };
  
      try {
        setMessages(prev => [...prev, userMessage]);
        setQuery("");
        
        setTimeout(() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
  
        const response = await fetch(`${API_URL}/messages/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userMessage),
        });
  
        if (!response.ok) throw new Error('Failed to send message');
  
        const aiResponse = await response.json();
        
        const aiMessage: Message = {
          text: aiResponse.text,
          type: "ai",
          timestamp: new Date().toISOString()
        };
  
        setMessages(prev => [...prev, aiMessage]);
        
        setTimeout(() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
  
      } catch (error) {
        console.error("Error in conversation:", error);
        setMessages(prev => [...prev, {
          text: "Sorry, I encountered an error. Please try again.",
          type: "ai",
          timestamp: new Date().toISOString()
        }]);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/react-logo.png')}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>AI Assistant</Text>
        </View>
  
        <ScrollView 
          ref={scrollViewRef}
          style={styles.chatArea}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageWrapper,
                msg.type === "user" ? styles.userMessage : styles.aiMessage
              ]}
            >
              <Text style={styles.messageText}>
                {msg.text}
              </Text>
              <Text style={styles.timestamp}>
                {new Date(msg.timestamp).toLocaleTimeString()}
              </Text>
            </View>
          ))}
        </ScrollView>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleQuery}
            returnKeyType="send"
            editable={!isLoading}
          />
          <TouchableOpacity
            onPress={handleQuery}
            disabled={isLoading || !query.trim()}
            style={[
              styles.sendButton,
              (isLoading || !query.trim()) && styles.sendButtonDisabled
            ]}
          >
            {isLoading ? (
              <ActivityIndicator color="#000" size="small" />
            ) : (
              <Text style={styles.sendButtonText}>→</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

export default AIAssistant;