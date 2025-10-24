import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': Lato_400Regular,
    'Nunito-Sans-Bold': Nunito_700Bold,
    'Nunito-SemiBold': Nunito_600SemiBold, 
  });

  if (!fontsLoaded) {
    // Loader anzeigen, solange die Fonts laden
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.icon.interactive.active} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
}
