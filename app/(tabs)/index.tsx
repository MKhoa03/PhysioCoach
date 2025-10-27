import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../theme';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.text}>Hier kommt dein Inhalt hin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  heading: {
    fontFamily: fonts.family.heading,
    fontSize: fonts.size.xl,
    color: colors.text.heading,
    marginBottom: 20,
  },

  text: {
    fontFamily: fonts.family.text,
    fontSize: fonts.size.m,
    color: colors.text.body,
  },
  
});
