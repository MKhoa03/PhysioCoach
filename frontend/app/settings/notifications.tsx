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

          {/* OPTION 1 */}
          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="notifications"
                size={24}
                color={colors.icon.decorative}
                style={{ marginRight: wp(3) }}
              />
              <Text style={[globalStyles.text, { flex: 1 }]}>
                Tägliche Erinnerung
              </Text>
              <Ionicons
                name="toggle"
                size={36}
                color={colors.icon.interactive.inactive}
              />
            </View>
          </View>

          {/* OPTION 2 */}
          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="time"
                size={24}
                color={colors.icon.decorative}
                style={{ marginRight: wp(3) }}
              />
              <Text style={[globalStyles.text, { flex: 1 }]}>
                Trainingszeit auswählen
              </Text>
              <Ionicons
                name="chevron-forward"
                size={22}
                color={colors.text.body}
              />
            </View>
          </View>

          {/* OPTION 3 */}
          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.icon.decorative}
                style={{ marginRight: wp(3) }}
              />
              <Text style={[globalStyles.text, { flex: 1 }]}>
                Trainingsfortschritt
              </Text>
              <Ionicons
                name="toggle"
                size={36}
                color={colors.icon.interactive.inactive}
              />
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
    
  );

}