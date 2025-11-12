import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';
import { wp, hp } from './responsive';


export const globalStyles = StyleSheet.create({

  /* ========= LAYOUT ========= */

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp(5),
    justifyContent: 'center',  
  },

  logoContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },

  titleContainer: {
    alignItems: 'flex-start',
    marginLeft: wp(5),
    marginTop: hp(1),
    marginBottom: hp(3),
  },

  /* ========= TYPOGRAPHY ========= */

  title: {
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.xl,
    color: colors.text.heading,
  },

  subtitle: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.m,
    color: colors.text.body,
    lineHeight: 30,
    marginTop: hp(1),
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

  /* ========= BUTTONS ========= */

  buttonText: {
    fontFamily: fonts.family.button,
    fontSize: fonts.size.m,
    color: colors.text.button,
  },

  button: {
    backgroundColor: colors.icon.interactive.active,
    borderRadius: 45,
    paddingVertical: hp(1.8),
    marginHorizontal: wp(8),
    alignItems: 'center',
  },

  forgotPassword: {
    marginTop: hp(1.2),
    color: colors.icon.interactive.active,
    textAlign: 'center',
    fontSize: fonts.size.xs,
  },

  /* ========= CARDS & INPUTS ========= */

  card: {
    backgroundColor: colors.card.background,
    borderRadius: 45,         
    padding: wp(4),
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardForeground: {
    backgroundColor: colors.card.foreground,
    borderRadius: 30,
    padding: wp(2),
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flexDirection: 'row',   
    alignItems: 'center',
    width: '100%',
  },

  textInput: {
    flex: 1,
    backgroundColor: colors.card.foreground,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(3),
    fontFamily: fonts.family.text,
    fontSize: fonts.size.xs,
    color: colors.text.body,
    textAlign: 'center',
  },

  /* ==== WEEK TRACKER ==== */

  weekTrackerContainer: {
    marginVertical: hp(2),
    width: '90%',
  },

  weekTrackerCirclesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  weekTrackerDayContainer: {
    alignItems: 'center',
  },

  weekTrackerCircle: {
    width: wp(8),      
    height: wp(8),
    borderRadius: wp(5),
    borderWidth: 0,
    backgroundColor: colors.icon.decorative,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },

  weekTrackerCheckmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  weekTrackerDayText: {
    fontSize: fonts.size.xs,
    color: colors.icon.decorative,
},

  /* ========= LOGO ========= */
    
  logo: {
    width: wp(26),
    height: wp(26),
    resizeMode: "contain",
  },
  
});
