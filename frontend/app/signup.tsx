import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, globalStyles } from '../theme';
import { wp, hp } from '../theme/responsive';


export default function Signup() {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (

    <SafeAreaView style={globalStyles.container}>

      {/* === Logo === */}
      <View style={globalStyles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={globalStyles.logo}
          resizeMode="contain"
        />
      </View>

      {/* === Titel === */}
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Registrierung</Text>
        <Text style={globalStyles.subtitle}>Erstelle dein Konto und starte jetzt</Text>
      </View>

      {/* === Name === */}
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
              style={[globalStyles.textInput, { textAlign: 'left' }]}
              keyboardType="default"
            />
          </View>
        </View>
      </View>

      {/* === E-Mail === */}
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
              style={[globalStyles.textInput, { textAlign: 'left' }]}
              keyboardType="email-address"
            />
          </View>
        </View>
      </View>

      {/* === Passwort === */}
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
              placeholder="Passwort"
              placeholderTextColor={colors.text.body}
              style={[globalStyles.textInput, { textAlign: 'left' }]}
              secureTextEntry={!showPassword}
            />
          </View>
        </View>
      </View>

      {/* === Passwort anzeigen === */}
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp(1.5),
          marginLeft: wp(10),
        }}
      >
        <View
          style={{
            width: wp(4.5),
            height: wp(4.5),
            borderRadius: wp(2.5),
            borderWidth: 2,
            borderColor: colors.icon.interactive.active,
            backgroundColor: showPassword
              ? colors.icon.interactive.active
              : 'transparent',
            marginRight: wp(2),
          }}
        />
        <Text style={[globalStyles.text, { color: colors.text.body, fontSize: fonts.size.xxs }]}>
          Passwort anzeigen
        </Text>
      </TouchableOpacity>

      {/* === Registrieren Button === */}
      <TouchableOpacity style={[globalStyles.button, {marginTop: hp(5)}]}>
        <Text style={globalStyles.buttonText}>Registrieren</Text>
      </TouchableOpacity>

      {/* === zur Anmeldung === */}
      <View style={{ alignItems: 'center', marginTop: hp(3) }}>
        <Text style={[globalStyles.text, { fontSize: fonts.size.xs }]}>Du hast schon ein Konto? </Text>
        <Text
          style={[globalStyles.text, { color: colors.icon.interactive.active, fontSize: fonts.size.xs }]}
          onPress={() => router.push('/login')}
        >
          Hier anmelden
        </Text>
      </View>

    </SafeAreaView>
  );
}