import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SensorsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensors</Text>
      <Text>Temperature, humidity and other sensors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});