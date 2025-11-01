import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';


export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  titleContainer: {
    margin: 40,
    marginBottom: 50,
    alignItems: 'center',
  },

  title: {
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.xl,
    color: colors.text.heading,
  },

  subtitle: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.m,
    color: colors.text.body,
    marginTop: 10,
  },

  heading: {
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.l,
    color: colors.text.heading,
  },

  text: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.s,
    color: colors.text.body,
  },

  button: {
    backgroundColor: colors.icon.interactive.active,
    borderRadius: 60,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: fonts.family.button,
    fontSize: fonts.size.m,
    color: colors.text.button,
  },

  card: {
    backgroundColor: colors.card.background,
    borderRadius: 60,         
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardForeground: {
    backgroundColor: colors.card.foreground,
    borderRadius: 45,         
    padding: 15,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: '98%',
    padding: 10,
    backgroundColor: colors.card.foreground,
    borderRadius: 45,
    borderWidth: 0,         
    borderColor: 'transparent',
    textAlign: 'center',
    fontFamily: fonts.family.text,
    fontSize: fonts.size.s,
    color: colors.text.body,
  }
  
});
