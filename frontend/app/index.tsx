import { Text, View } from 'react-native';
import { globalStyles } from '../theme';


export default function Welcome() {

  return (

    <View style={globalStyles.container}>

        <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.title}>Wilkommen!</Text>
        </View>

    </View>

  );

}