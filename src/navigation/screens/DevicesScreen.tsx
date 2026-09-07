import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DevicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devices</Text>
      <Text>Control your connected IoT devices</Text>
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