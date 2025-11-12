import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '@/theme';

export default function WeekTracker() {
  const weekDays = [
    { day: 'Mo', done: true },
    { day: 'Di', done: false },
    { day: 'Mi', done: true },
    { day: 'Do', done: false },
    { day: 'Fr', done: false },
    { day: 'Sa', done: true },
    { day: 'So', done: false },
  ];

  return (

    <View style={globalStyles.weekTrackerContainer}>
      <View style={globalStyles.weekTrackerCirclesContainer}>

        {weekDays.map((item, index) => (
          <View key={index} style={globalStyles.weekTrackerDayContainer}>
            <View
              style={[
                globalStyles.weekTrackerCircle,
                item.done && globalStyles.weekTrackerCircleDone,
              ]}
            >
              {item.done && <Text style={globalStyles.weekTrackerCheckmark}>✓</Text>}
            </View>
            <Text style={globalStyles.weekTrackerDayText}>{item.day}</Text>
          </View>
        ))}

      </View>
    </View>
  );

}