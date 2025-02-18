import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MessageInputProps = {
  onSend: (message: string) => void;
};

const MessageInput = function ({ onSend }: MessageInputProps) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSend(inputText);
    setInputText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Type a message..."
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
        <Ionicons name="send" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput; 

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f3f4',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#0077b5',
    padding: 10,
    borderRadius: 20,
  },
});
