import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
  
}
