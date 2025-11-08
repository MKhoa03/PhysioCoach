import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/globalStyles';

export default function Settings() {

  return (

    <View style={globalStyles.container}>

      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Einstellungen</Text>
      </View>
      
    </View>
    
  );

}