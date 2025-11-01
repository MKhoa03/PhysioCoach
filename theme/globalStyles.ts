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
    fontFamily: fonts.family.button,
    fontSize: fonts.size.m,
    color: colors.text.body,
  },

  card: {
    backgroundColor: colors.card.background,
    borderRadius: 60,         
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
