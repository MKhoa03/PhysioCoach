import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {

  return (

    <SafeAreaView style={globalStyles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

          <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
              <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
          </TouchableOpacity>

          <View style={globalStyles.titleContainer}>
              <Text style={globalStyles.title}>Über PhysioCoach</Text>
          </View>

          {/* === Content Card === */}
          <Text style={[globalStyles.text, { textAlign: 'center', lineHeight: 26 }]}>
            PhysioCoach ist eine unterstützende App für Patient:innen in der Physiotherapie.{"\n\n"}

            Sie hilft dabei, Übungen gezielt auszuwählen und im Alltag korrekt durchzuführen.{"\n\n"}

            Die App richtet sich an Menschen mit körperlichen Beschwerden, die ihre Therapie aktiv begleiten möchten.{"\n\n"}

            Ziel von PhysioCoach ist es, die Therapietreue zu verbessern und Sicherheit bei der Übungsausführung zu geben.{"\n\n"}

            PhysioCoach ersetzt keine physiotherapeutische Behandlung, sondern dient als ergänzende Unterstützung.{"\n\n"}

            Dieses Projekt wurde im Rahmen eines Hochschulprojekts entwickelt.
          </Text>
      
      </ScrollView>
    </SafeAreaView>
    
  );

}