import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from './components/Header';

export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
});
