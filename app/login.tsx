import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../theme';

export default function Login() {

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
            style={globalStyles.textInput}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <TextInput
            placeholder="Passwort"
            style={globalStyles.textInput}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={globalStyles.button}>
        <Text style={ globalStyles.buttonText }>Anmelden</Text>
      </TouchableOpacity>

    </View>

  );
  
}