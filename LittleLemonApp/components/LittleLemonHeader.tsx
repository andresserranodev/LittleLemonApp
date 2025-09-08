import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to Little Lemon
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  },
});

export default LittleLemonHeader;
