import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors, fonts } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Datenschutz() {

  return (

    <SafeAreaView style={globalStyles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

            <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
                <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
            </TouchableOpacity>

            <View style={[globalStyles.titleContainer, {alignItems: 'center'}]}>
                <Text style={globalStyles.title}>Datenschutz</Text>
            </View>

                <Text style={[globalStyles.text, {textAlign: 'center', fontSize: fonts.size.xs}]}>
                    Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen (DSGVO). {"\n\n"}

                    Die Nutzung der App ist grundsätzlich ohne Angabe personenbezogener Daten möglich. {"\n\n"}

                    Personenbezogene Daten werden nur erhoben, wenn dies für die Nutzung bestimmter Funktionen erforderlich ist 
                    (z. B. Kontaktaufnahme). {"\n\n"}

                    Es erfolgt keine Weitergabe an Dritte ohne Ihre Zustimmung. {"\n\n"}

                    Weitere Informationen finden Sie in unserer vollständigen Datenschutzerklärung. {"\n"}
                </Text>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.physiotherapie-dahlmann.de/datenschutz/")}>
                <Text style={[globalStyles.text, {color: colors.icon.interactive.active, fontSize: fonts.size.xxs, textAlign: 'center'}]}>
                    Hier vollständigen Datenschutz ansehen
                </Text>
            </TouchableOpacity>
      
      </ScrollView>
    </SafeAreaView>
    
  );

}