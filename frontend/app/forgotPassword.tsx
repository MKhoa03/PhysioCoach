import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, globalStyles } from '../theme';
import { wp, hp } from '../theme/responsive';
import { API_URL } from '../config';
import { useRouter } from "expo-router";


export default function passwordForgotten() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  
  const handlePasswordReset = async() => {
    if(!email){
      alert("Bitte Email eingeben!");
      return;
    }

    try{
        const res = await fetch(`${API_URL}/api/users/request-password-reset`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email}),
      });

      const data = await res.json();

      if(data.success){
        //das müsste weg in der zukunft, erstmal nur zum testen direkt push
        router.push("/passwordReset");
      } else {
        alert("Die Mail existiert nicht");
      }
    } catch (err){
      console.log(err);
      alert("Server nicht erreichbar");
    }
  };


  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Passwort Vergessen</Text>
        <Text style={globalStyles.subtitle}>
          Gib deine E-Mail-Adresse ein, um einen Link zum Zurücksetzen zu erhalten
        </Text>
      </View>

      {/* === E-Mail === */}
      <View style={globalStyles.card}>
        <View style={globalStyles.cardForeground}>
          <View style={globalStyles.inputContainer}>
            <Ionicons
              name='mail'
              size={25}
              color={colors.icon.decorative}
              style={{ marginLeft: wp(3) }}
            />
            <TextInput
              placeholder='E-Mail'
              placeholderTextColor={colors.text.body}
              style={globalStyles.textInput}
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
      </View>

      {/* === Link Button === */}
      <TouchableOpacity style={[globalStyles.button, {marginTop: hp(9)}]} onPress={handlePasswordReset}>
        <Text style={globalStyles.buttonText}>Link senden</Text>
      </TouchableOpacity>
    </View>
  );
}