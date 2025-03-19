import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';

export function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Catalog />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: '#fff',
    marginTop: 25,
  },
});
