import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme';

export default function Dashboard() {

  const router = useRouter();

  return (

    <View style={globalStyles.container}>
  
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Hallo, Lisa!</Text>
      </View>

      {/* Cards */}
      <View style={globalStyles.card}>
        <Text style={globalStyles.heading}>Dashboard</Text>
        <Text style={globalStyles.text}>Hier kommt dein Inhalt hin.</Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.heading}>Weitere Karte</Text>
        <Text style={globalStyles.text}>Noch mehr Inhalt.</Text>
      </View>

    </View> 

  );
  
}