import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, fonts, globalStyles } from '../theme';

export default function Login() {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (

    <View style={globalStyles.container}>

      <Image
        source={require('../assets/images/logo.png')}
        style={globalStyles.logo}
        resizeMode="contain"
      />

      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Anmeldung</Text>
        <Text style={globalStyles.subtitle}>Melde dich an, um fortzufahren</Text>
      </View>

      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <TextInput
            placeholder="E-Mail"
            placeholderTextColor={colors.text.body}
            style={globalStyles.textInput}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <TextInput
            placeholder="Passwort"
            placeholderTextColor={colors.text.body}
            style={globalStyles.textInput}
            secureTextEntry={!showPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 12,
          marginLeft: 50
        }}
      >
        <View
          style={{
            width: 18,
            height: 18,
            borderRadius: 11,
            borderWidth: 2,
            borderColor: colors.icon.interactive.active,
            backgroundColor: showPassword
              ? colors.icon.interactive.active
              : 'transparent',
            marginRight: 8,
          }}
        />
        <Text style={[globalStyles.text, { color: colors.text.body, fontSize: fonts.size.xs }]}>
          Passwort anzeigen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.loginButton}>
        <Text style={ globalStyles.buttonText }>Anmelden</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={globalStyles.text}>Du hast noch kein Konto? </Text>
        <Text
          style={[globalStyles.text, { color: colors.icon.interactive.active }]}
          onPress={() => router.push('/signup')}
        >Hier registrieren</Text>
      </View>

    </View>

  );
  
}