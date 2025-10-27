import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../theme';

export default function TabsLayout() {
  
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.icon.interactive.active,
        tabBarInactiveTintColor: colors.icon.interactive.inactive,
        tabBarStyle: {
          backgroundColor: colors.card.background,
          borderRadius: 60,
          margin: 10,
          height: 80,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          paddingBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      {/* Dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={26} /> // TODO: home icon verschieben, siehe mobile
          ),
        }}
      />
    </Tabs>
  );

}
