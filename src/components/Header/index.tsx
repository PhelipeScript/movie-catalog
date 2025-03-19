import { View, Text, StyleSheet, TextInput } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de filmes</Text>

      <View style={styles.inputContainer}>
        <Text>Filtro de ordenação</Text>

        <TextInput
          placeholder="Buscar filmes..."
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
    width: '100%',
  },

  input: {
    boxShadow: '0 0px 2px 0px rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '100%',
    maxWidth: 180,
    height: 40,
  },
});
