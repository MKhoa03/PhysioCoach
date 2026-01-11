import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles, colors, fonts } from "@/theme";
import { wp, hp } from "@/theme/responsive";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {

  const [name, setName] = useState("Max Mustermann");
  const [email, setEmail] = useState("max@example.com");
  const [password, setPassword] = useState("");

  return (

    <SafeAreaView style={globalStyles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(18), paddingHorizontal: wp(4) }}>

            <TouchableOpacity onPress={() => router.back()} style={{ padding: wp(2) }}>
                <Ionicons name="arrow-back" size={28} color={colors.text.heading} />
            </TouchableOpacity>

            <View style={globalStyles.titleContainer}>
                <Text style={globalStyles.title}>Profil bearbeiten</Text>
            </View>

            {/* NAME */}
            <View style={globalStyles.card}>
              <View style={globalStyles.cardForeground}>
                <View style={globalStyles.inputContainer}>
                  <Ionicons
                    name="person"
                    size={25}
                    color={colors.icon.decorative}
                    style={{ marginLeft: wp(3), marginRight: wp(2) }}
                  />
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor={colors.text.body}
                    style={globalStyles.textInput}
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>
            </View>

            {/* EMAIL */}
            <View style={globalStyles.card}>
              <View style={globalStyles.cardForeground}>
                <View style={globalStyles.inputContainer}>
                  <Ionicons
                    name="mail"
                    size={25}
                    color={colors.icon.decorative}
                    style={{ marginLeft: wp(3), marginRight: wp(2) }}
                  />
                  <TextInput
                    placeholder="E-Mail"
                    placeholderTextColor={colors.text.body}
                    style={globalStyles.textInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>
            </View>

            {/* PASSWORT */}
            <View style={globalStyles.card}>
              <View style={globalStyles.cardForeground}>
                <View style={globalStyles.inputContainer}>
                  <Ionicons
                    name="lock-closed"
                    size={25}
                    color={colors.icon.decorative}
                    style={{ marginLeft: wp(3), marginRight: wp(2) }}
                  />
                  <TextInput
                    placeholder="Neues Passwort"
                    placeholderTextColor={colors.text.body}
                    style={globalStyles.textInput}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
              </View>
            </View>

            {/* SPEICHERN */}
            <TouchableOpacity
              style={[globalStyles.button, { marginTop: hp(5) }]}
              onPress={() => {
                console.log("Profil gespeichert (Demo):", name, email);
                router.back();
              }}
            >
              <Text style={globalStyles.buttonText}>Speichern</Text>
            </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    
  );

}