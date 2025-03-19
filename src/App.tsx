import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { useState } from 'react';
import { SortType } from './utils/sort';

export function App() {
  const [sort, setSort] = useState<SortType>('asc');

  return (
    <SafeAreaView style={styles.container}>
      <Header filterAction={setSort} />
      <Catalog sort={sort} />
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
