import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';


export default function App() {
  return (
    <>
    <View style={styles.container}>
      <LittleLemonHeader></LittleLemonHeader>
      <StatusBar style="auto" />
    </View>
    <View>
      <LittleLemonFooter/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
});
