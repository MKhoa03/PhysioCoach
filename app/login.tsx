import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, globalStyles } from '../theme';

export default function Login() {

  const router = useRouter();

  return (

    <View style={globalStyles.container}>

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
            secureTextEntry={true}
          />
        </View>
      </View>

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