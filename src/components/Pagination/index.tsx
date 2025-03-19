import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const goToFirstPage = () => onPageChange(1);

  const goToLastPage = () => onPageChange(totalPages);

  const goToPreviousPage = () => onPageChange(currentPage - 1);

  const goToNextPage = () => onPageChange(currentPage + 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToFirstPage} disabled={currentPage === 1}>
        <Text style={[styles.buttonText, currentPage === 1 && styles.disabledButton]}>Primeira</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToPreviousPage} disabled={currentPage === 1}>
        <Text style={[styles.buttonText, currentPage === 1 && styles.disabledButton]}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.pageNumber}>
        Página {currentPage} de {totalPages}
      </Text>

      <TouchableOpacity onPress={goToNextPage} disabled={currentPage === totalPages}>
        <Text style={[styles.buttonText, currentPage === totalPages && styles.disabledButton]}>Próximo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLastPage} disabled={currentPage === totalPages}>
        <Text style={[styles.buttonText, currentPage === totalPages && styles.disabledButton]}>Última</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  buttonText: {
    fontSize: 16,
    color: '#007bff', 
  },

  pageNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  disabledButton: {
    color: '#ccc', 
  },
});
