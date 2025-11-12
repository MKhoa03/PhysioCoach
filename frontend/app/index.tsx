import { useRouter } from 'expo-router';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles, colors, fonts } from '../theme';
import { wp, hp } from '../theme/responsive';


export default function Welcome() {

  const router = useRouter();

  return (

    <View style={globalStyles.container}>

      {/* === Logo === */}
      <View style={[globalStyles.logoContainer, {marginBottom: 60, marginTop: 50, alignItems: 'center', transform: [{ scale: 1.4 }]}]}>
        <Image
          source={require('../assets/images/logo.png')}
          style={globalStyles.logo}
          resizeMode="contain"
        />
      </View>

      {/* === Titel === */}
      <View style={[globalStyles.titleContainer, {marginBottom: 90}]}>
        <Text style={[globalStyles.title, {marginBottom: 10}]}>Willkommen bei PhysioCoach!</Text>
        <Text style={globalStyles.subtitle}>Dein Begleiter für {'\n'}Übungen & Erholung</Text>
      </View>

      {/* === Anmelden Button === */}
      <TouchableOpacity style={[globalStyles.button, {marginTop: hp(9)}]} onPress={() => router.push('/login')}>
        <Text style={globalStyles.buttonText}>Anmelden</Text>
      </TouchableOpacity>

      {/* === Registrieren Button === */}
      <TouchableOpacity style={[globalStyles.button, {marginTop: hp(3)}]} onPress={() => router.push('/signup')}>
        <Text style={globalStyles.buttonText}>Registrieren</Text>
      </TouchableOpacity>

      <Text
        style={[globalStyles.text, { marginTop: 20, alignSelf: 'center' , color: colors.icon.interactive.active, fontSize: fonts.size.xs }]}
        onPress={() => router.push('/(tabs)')}
      >
        Hier zum Dashboard
      </Text>

    </View>

  );

}