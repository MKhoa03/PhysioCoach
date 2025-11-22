import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles, colors } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeekTracker from '../../components/WeekTracker';

export default function Dashboard() {

  const tips = [
  "Trinke jeden Tag ausreichend Wasser.",
  "Mache regelmäßig kleine Pausen bei der Arbeit.",
  "Achte auf eine aufrechte Haltung.",
  "Plane dir kleine Erfolge ein – Motivation steigert sich dadurch.",
  "Atme bewusst ein paar Mal tief durch, wenn du gestresst bist."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (

  <SafeAreaView style={globalStyles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} >
  
        <View style={[globalStyles.titleContainer, {alignItems: 'center', marginLeft: 0}]}>
          <Text style={globalStyles.title}>Hallo, Lisa!</Text>
        </View>

        {/* Wochen-Tracker */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Diese Woche</Text>
          <WeekTracker />
        </View>

        {/* Letzte Übung */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Letzte Übung</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/placeholder.png')}
              style={{ width: 120, height: 90, borderRadius: 10, margin: 15 }}
            />

            <View style={{ flex: 1, gap: 4 }}>
              <Text style={globalStyles.text}>Schulter-Dehnung</Text>
              <Text style={globalStyles.text}>Dauer: 5 Min.</Text>
              <Text style={globalStyles.text}>Montag, 07. Oktober</Text>
            </View>
          </View>

          <TouchableOpacity
              style={[globalStyles.button, { marginBottom: 8, paddingVertical: 8, paddingHorizontal: 25 }]}
              onPress={() => console.log('Fortsetzen gedrückt')}
            >
              <Text style={globalStyles.buttonText}>Hier fortsetzen</Text>
          </TouchableOpacity>
        </View>

        {/* Tipp des Tages */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Tipp des Tages</Text>
          
          <View style={[globalStyles.cardForeground, {marginTop: 10}]}>
            <Text style={globalStyles.tipText}>{randomTip}</Text>
          </View>
        </View>

      </ScrollView>
      <View style={{ height: 70, backgroundColor: colors.background }} />
    </SafeAreaView>

  );
  
}