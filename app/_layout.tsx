// File: app/_layout.tsx
import React, { useEffect, useState } from 'react';
import { Stack } from "expo-router";
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const token = await AsyncStorage.getItem('userToken');
        
        if (token) {
          router.replace('/(tabs)/feed');
        } else {
          router.replace('/login');
        }
      } catch (error) {
        console.error('Failed to check token', error);
        router.replace('/login');
      } finally {
        setIsReady(true);
      }
    };
    
    checkToken();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="usersetup" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="register-startup" options={{ headerShown: false }} />
      <Stack.Screen name="create" options={{ headerShown: false }} />
      <Stack.Screen name="AI_asst" options={{ headerShown: false }} />
    </Stack>
  );
}