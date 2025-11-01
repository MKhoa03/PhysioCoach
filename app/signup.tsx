import { Text, View } from 'react-native';
import { globalStyles } from '../theme';


export default function Signup() {

  return (

    <View style={globalStyles.container}>

        <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>Registrierung</Text>
        </View>

    </View>

  );
  
}