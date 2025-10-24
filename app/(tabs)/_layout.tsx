import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { colors } from '../../theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.icon.interactive.active,
        tabBarInactiveTintColor: colors.icon.interactive.inactive,
        headerStyle: { backgroundColor: colors.card.background },
        headerTintColor: colors.text.heading,
        tabBarStyle: { backgroundColor: colors.card.background },
      }}
    >
      {/* Dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
