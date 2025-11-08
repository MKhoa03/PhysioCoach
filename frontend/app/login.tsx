import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts, globalStyles } from '../theme';
import { wp, hp } from '../theme/responsive';


export default function Login() {

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
        <Text style={globalStyles.title}>Anmeldung</Text>
        <Text style={globalStyles.subtitle}>Melde dich an, um fortzufahren</Text>
      </View>

      {/* === E-Mail === */}
      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <View style={globalStyles.inputContainer}>
            <Ionicons
              name="mail"
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3) }}
            />
            <TextInput
              placeholder="E-Mail"
              placeholderTextColor={colors.text.body}
              style={globalStyles.textInput}
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
              style={{ marginLeft: wp(3) }}
            />
            <TextInput
              placeholder="Passwort"
              placeholderTextColor={colors.text.body}
              style={globalStyles.textInput}
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
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
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

      {/* === Anmelden Button === */}
      <TouchableOpacity style={[globalStyles.button, {marginTop: hp(9)}]}>
        <Text style={globalStyles.buttonText}>Anmelden</Text>
      </TouchableOpacity>

      {/* === Passwort vergessen === */}
      <TouchableOpacity onPress={() => router.push('/forgot-password')}>
        <Text style={globalStyles.forgotPassword}>Passwort vergessen?</Text>
      </TouchableOpacity>

      {/* === zur Registrierung === */}
      <View style={{ alignItems: 'center', marginTop: hp(7) }}>
        <Text style={[globalStyles.text, {fontSize: fonts.size.xs}]}>Du hast noch kein Konto? </Text>
        <Text
          style={[globalStyles.text, { color: colors.icon.interactive.active, fontSize: fonts.size.xs }]}
          onPress={() => router.push('/signup')}
        >
          Hier registrieren
        </Text>
      </View>

    </SafeAreaView>
  );
}