import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { globalStyles, colors, fonts } from '../theme';


export default function Splash() { 

const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 200,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -100,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (

    <View style={[globalStyles.container, {alignItems: 'center'}]}>

      {/* === Logo === */}
      <View style={[globalStyles.logoContainer, {marginBottom: 60, marginTop: 50, alignItems: 'center', transform: [{ scale: 1.4 }]}]}>
        <Image
          source={require('../assets/images/logo.png')}
          style={globalStyles.logo}
          resizeMode="contain"
        />
      </View>

      {/* === Ladebalken === */}
      <View style={styles.progressBarBackground}>
        <Animated.View
          style={[styles.movingBar, {transform: [{ translateX }]}]}
        />
      </View>

      {/* === Text === */}
      <View style={globalStyles.titleContainer}>
        <Text style={[globalStyles.title, {marginTop: 60, textAlign: 'center' }]}>PhysioCoach</Text>
        <Text style={[globalStyles.subtitle, {textAlign: 'center'}]}>Dein Begleiter für {'\n'}Übungen & Erholung</Text>
      </View>

    </View>


  );

}

const styles = StyleSheet.create({

  progressBarBackground: {
    width: 200,
    height: 8,
    backgroundColor: colors.icon.interactive.inactive,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 20,
  },

    movingBar: {
    position: 'absolute',
    width: 60,
    height: 8,
    backgroundColor: colors.icon.interactive.active,
    borderRadius: 4,
  },

});
