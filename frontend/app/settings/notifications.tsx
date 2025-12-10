import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notifications() {

  return (

    <SafeAreaView style={globalStyles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

            <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
                <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
            </TouchableOpacity>

            <View style={globalStyles.titleContainer}>
                <Text style={globalStyles.title}>Benachrichtigungen</Text>
            </View>
      
      </ScrollView>
    </SafeAreaView>
    
  );

}