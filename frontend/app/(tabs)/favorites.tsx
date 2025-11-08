import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/globalStyles';

export default function Favorites() {

  return (

    <View style={globalStyles.container}>

      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.title}>Favoriten</Text>
      </View>
      
    </View>
    
  );

}