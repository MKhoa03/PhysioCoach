import { colors, fonts } from './index';


export const globalStyles = {

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  heading: {
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.xl,
    color: colors.text.heading,
  },

  text: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.m,
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

};
