import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../theme';


export default function Splash() {

  return (

    <View style={styles.container}>

      <Image
      source={require('../assets/images/logo.png')} 
      style={styles.logo}
      resizeMode="contain"
      />

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: '40%' }]} />
      </View>


      <View style={styles.textContainer}>
        <Text style={styles.header}>PhysioCoach</Text>
        <Text style={styles.text}>Dein Begleiter für {'\n'} Übungen & Erholung</Text>
      </View>

      {/* <ActivityIndicator size="large" color={colors.icon.interactive.active} /> */}

    </View>


  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },

  textContainer: {
    flex: 0.3,            
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,        
  },

  header: { 
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.l,
    color: colors.text.heading,
  },

  text: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.m,
    color: colors.text.body,
    textAlign: 'center',
    marginTop: 8,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  progressBarBackground: {
    width: 200,
    height: 8,
    backgroundColor: colors.icon.interactive.inactive,
    borderRadius: 2,
    marginTop: 20
  },

  progressBarFill: {
    height: 8,
    backgroundColor:colors.icon.interactive.active,
    borderRadius: 2
  },


});
