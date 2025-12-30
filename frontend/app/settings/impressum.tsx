import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors, fonts } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Impressum() {

  return (

    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

        <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
          <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
        </TouchableOpacity>

        <View style={[globalStyles.titleContainer, {alignItems: 'center'}]}>
          <Text style={globalStyles.title}>Impressum</Text>
        </View>

        <Text style={[globalStyles.text, {textAlign: 'center', fontSize: fonts.size.xs}]}>

          Physiotherapie Ludwig Dahlmann UG (haftungsbeschränkt){"\n"}
          Mathildenstraße 5{"\n"}
          12459 Berlin{"\n\n"}

          Vertreten durch den Geschäftsführer:{"\n"}
          Robert Dahlmann{"\n\n"}

          Registereintrag:{"\n"}
          Amtsgericht Charlottenburg, Berlin{"\n"}
          Handelsregisternummer: HRB 183562 B{"\n\n"}

          Umsatzsteuer-Identifikationsnummer:{"\n"}
          Steuer-Nr.: 37/470/50222{"\n\n"}

          Wirtschafts-Identifikationsnummer:{"\n"}
          Betriebsnummer: 94208206{"\n"}
          IK: 441114931{"\n\n"}

          Zuständige Aufsichtsbehörde:{"\n"}
          — bitte ergänzen —{"\n\n"}

          Haftungsausschluss{"\n\n"}

          Haftung für Inhalte{"\n"}
          Die Inhalte dieser App wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
          Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. 
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den 
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht 
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. 
          Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten 
          Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen 
          werden wir die Inhalte umgehend entfernen.{"\n\n"}

          Haftung für Links{"\n"}
          Diese App kann Links zu externen Webseiten enthalten, auf deren Inhalte wir 
          keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. 
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
          verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir 
          derartige Links umgehend.{"\n\n"}

          Urheberrecht{"\n"}
          Die in dieser App veröffentlichten Inhalte unterliegen dem deutschen 
          Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb 
          der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des 
          jeweiligen Autors. Downloads und Kopien sind nur für den privaten, nicht 
          kommerziellen Gebrauch gestattet.{"\n\n"}

          Bildnachweise{"\n"}
          Bilder von Unsplash: Colin Lloyd, Royal Anwar, Nikola Jovanovic, 
          Mildly Useful, Mimi Thian, Vitaly Gariev
        </Text>

      </ScrollView>
    </SafeAreaView>

  );

}