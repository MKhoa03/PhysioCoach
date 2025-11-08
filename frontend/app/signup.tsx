import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, globalStyles } from '../theme';

export default function Signup() {

  const router = useRouter();

  return (

    <View style={globalStyles.container}>

      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Registrierung</Text>
        <Text style={globalStyles.subtitle}>Erstelle dein Konto, um mit den Übungen zu starten</Text>
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
            placeholder="Name"
            placeholderTextColor={colors.text.body}
            style={globalStyles.textInput}
            keyboardType="default"
          />
        </View>
      </View>

      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <TextInput
            placeholder="Passwort"
            placeholderTextColor={colors.text.body}
            style={globalStyles.textInput}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={globalStyles.signupButton}>
        <Text style={ globalStyles.buttonText }>Registrieren</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 0 }}>
        <Text style={globalStyles.text}>Du hast schon ein Konto? </Text>
        <Text
          style={[globalStyles.text, { color: colors.icon.interactive.active }]}
          onPress={() => router.push('/login')}
        >Hier anmelden</Text>
      </View>

    </View>

  );
  
}