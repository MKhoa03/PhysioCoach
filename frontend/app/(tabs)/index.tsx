import { Text, View } from 'react-native';
import { globalStyles } from '../../theme';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeekTracker from '../../components/WeekTracker';

export default function Dashboard() {

  return (

  <SafeAreaView style={globalStyles.container}>
      <ScrollView>
  
        <View style={[globalStyles.titleContainer, {alignItems: 'center', marginLeft: 0}]}>
          <Text style={globalStyles.title}>Hallo, Lisa!</Text>
        </View>

        {/* Cards */}
        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Diese Woche</Text>
          <WeekTracker />
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Letzte Übung</Text>
          <Text style={globalStyles.text}>Noch mehr Inhalt.</Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.heading}>Tipp des Tages</Text>
          <Text style={globalStyles.text}>Noch mehr Inhalt.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
  
}