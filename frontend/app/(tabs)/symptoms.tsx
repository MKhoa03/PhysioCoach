import React from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { globalStyles, colors } from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from '../../theme/responsive';

export default function Symptoms() {

  return (

    <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp(18) }} >

        <View style={[globalStyles.titleContainer, {alignItems: 'center', marginLeft: 0}]}>
          <Text style={globalStyles.title}>Symptom-Suche</Text>
        </View>

        {/* Symptom-Suche */}
        <View style={[globalStyles.card, {padding: wp(6)}]}>
          <View style={globalStyles.cardForeground}>
            <View style={globalStyles.inputContainer}>
              <Ionicons
                name="search"
                size={25}
                color={colors.icon.decorative}
                style={{ marginLeft: wp(3) }}
              />
              <TextInput
                placeholder="Suche nach deinen Symptomen"
                placeholderTextColor={colors.text.body}
                style={globalStyles.textInput}
                keyboardType="default"
              />
            </View>
          </View>
        </View>

        <Text style={[globalStyles.text, {textAlign: 'center', marginTop: hp(5), marginBottom: hp(3)}]}>
          Oder wähle einen Bereich, um {'\n'} passende Videos zu sehen.
        </Text>

        <View style={[globalStyles.card, {padding: wp(7), marginBottom: hp(2)}]}>
          <Text style={globalStyles.text}>Beine & Knie</Text>
        </View>

        <View style={[globalStyles.card, {padding: wp(7), marginBottom: hp(2)}]}>
          <Text style={globalStyles.text}>Schultern & Arme</Text>
        </View>

        <View style={[globalStyles.card, {padding: wp(7), marginBottom: hp(2)}]}>
          <Text style={globalStyles.text}>Rücken & Nacken</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
    
  );

}