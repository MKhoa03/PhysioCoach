import { Text, View } from 'react-native';
import { globalStyles } from '../theme';


export default function PasswortReset() {

  return (

    <View style={globalStyles.container}>

        <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>Passwort Vergessen</Text>
        </View>

    </View>

  );

}