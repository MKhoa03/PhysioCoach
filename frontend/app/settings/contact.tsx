import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles ,colors } from '@/theme';
import { wp, hp } from '@/theme/responsive';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (

    <SafeAreaView style={globalStyles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

          <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
              <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
          </TouchableOpacity>

          <View style={globalStyles.titleContainer}>
              <Text style={globalStyles.title}>Kontakt</Text>
              <Text style={globalStyles.subtitle}>
                Hast du Fragen oder Feedback? Wir freuen uns auf deine Nachricht.
              </Text>
          </View>

          {/* NAME */}
          <Text style={[globalStyles.heading, {textAlign: 'center'}]}>Name</Text>
          <View style={globalStyles.card}>
            <View style={globalStyles.cardForeground}>
              <TextInput
                style={globalStyles.textInput}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          {/* EMAIL */}
          <Text style={[globalStyles.heading, { marginTop: hp(2), textAlign: 'center' }]}>E-Mail</Text>
          <View style={globalStyles.card}>
            <View style={globalStyles.cardForeground}>
              <TextInput
                style={globalStyles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* NACHRICHT */}
          <Text style={[globalStyles.heading, { marginTop: hp(2), textAlign: 'center' }]}>Nachricht</Text>
          <View style={globalStyles.card}>
            <View style={globalStyles.cardForeground}>
              <TextInput
                style={[
                  globalStyles.textInput,
                  {
                    height: hp(16),
                    textAlignVertical: "top",
                  },
                ]}
                multiline
                value={message}
                onChangeText={setMessage}
              />
            </View>
          </View>

          {/* SENDEN */}
          <TouchableOpacity
            style={[globalStyles.button, { marginTop: hp(4) }]}
            onPress={() => {
              alert("Nachricht gesendet (Demo)");
              router.back();
            }}
          >
            <Text style={globalStyles.buttonText}>Nachricht senden</Text>
          </TouchableOpacity>
      
      </ScrollView>
    </SafeAreaView>
    
  );

}