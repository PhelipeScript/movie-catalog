import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { useState } from 'react';
import { SortType } from './utils/sort';

export function App() {
  const [sort, setSort] = useState<SortType>('asc');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header filterAction={setSort} searchAction={setSearchQuery} />
      <Catalog sort={sort} searchQuery={searchQuery}  />
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
