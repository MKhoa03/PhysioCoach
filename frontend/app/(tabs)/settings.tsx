import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors, fonts } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {

  return (

    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

        <View style={[globalStyles.titleContainer, {alignItems: 'center'}]}>
          <Text style={globalStyles.title}>Einstellungen</Text>
        </View>

        {/* PROFIL BEARBEITEN */}
        <TouchableOpacity onPress={() => router.push({pathname: "/settings/profile"})}>
          <View style={globalStyles.card}>
            <View style={[{flexDirection: 'row'}]}>
              <Ionicons
              name="person"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3), marginRight: wp(2) }}
              />
              <Text style={globalStyles.heading}>Profil bearbeiten</Text>
            </View>
            <Text style={[globalStyles.text, {fontSize: fonts.size.xs, textAlign: 'center'}]}>Name, E-Mail, Passwort ändern</Text>
          </View>
        </TouchableOpacity>

        {/* BENACHRICHTIGUNGEN */}
        <TouchableOpacity onPress={() => router.push({pathname: "/settings/notifications"})}>
          <View style={globalStyles.card}>
            <View style={[{flexDirection: 'row'}]}>
              <Ionicons
              name="notifications"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3), marginRight: wp(2) }}
              />
              <Text style={globalStyles.heading}>Benachrichtigungen</Text>
            </View>
          <Text style={[globalStyles.text, {fontSize: fonts.size.xs, textAlign: 'center'}]}>Push-Mitteilungen aktivieren oder stummschalten</Text>
          </View>
        </TouchableOpacity>

        {/* KONTAKT */}
        <TouchableOpacity onPress={() => router.push({pathname: "/settings/contact"})}>
          <View style={[globalStyles.card, {marginTop: wp(12)}]}>
            <View style={[{flexDirection: 'row'}]}>
              <Ionicons
              name="chatbox"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3), marginRight: wp(2) }}
              />
              <Text style={globalStyles.heading}>Kontakt</Text>
            </View>
          <Text style={[globalStyles.text, {fontSize: fonts.size.xs, textAlign: 'center'}]}>Feedback oder Fragen senden</Text>
          </View>
        </TouchableOpacity>

        {/* IMPRESSUM & DATENSCHUTZ */}
        <TouchableOpacity onPress={() => router.push({pathname: "/settings/legal"})}>
          <View style={globalStyles.card}>
            <View style={[{flexDirection: 'row'}]}>
              <Ionicons
              name="document-text"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3), marginRight: wp(2) }}
              />
              <Text style={globalStyles.heading}>Rechtliche Hinweise</Text>
            </View>
          <Text style={[globalStyles.text, {fontSize: fonts.size.xs, textAlign: 'center'}]}>Impressum & Datenschutz</Text>
          </View>
        </TouchableOpacity>

        {/* ÜBER PHYSIOCOACH */}
        <TouchableOpacity onPress={() => router.push({pathname: "/settings/about"})}>
          <View style={globalStyles.card}>
            <View style={[{flexDirection: 'row'}]}>
              <Ionicons
              name="information-circle"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3), marginRight: wp(2) }}
              />
              <Text style={globalStyles.heading}>Über PhysioCoach</Text>
            </View>
          <Text style={[globalStyles.text, {fontSize: fonts.size.xs, textAlign: 'center'}]}>Version, Team, Projektinfos</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
      <View style={{ height: 70, backgroundColor: colors.background }} />
    </SafeAreaView>
    
  );

}