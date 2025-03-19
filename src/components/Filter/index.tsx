import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { SortType } from "../../utils/sort";

interface FilterProps {
  sortAction: (value: SortType) => void;
}

export function Filter({ sortAction }: FilterProps) {
  const [sort, setSort] = useState<SortType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const sortOptions: {label: string, value: SortType}[] = [
    { label: "A-Z", value: "asc" },
    { label: "Z-A", value: "desc" },
    { label: "Mais Recentes", value: "recent" },
    { label: "Mais Antigos", value: "oldest" },
    { label: "Avaliação \n(maior para menor)", value: "high_rating" },
    { label: "Avaliação \n(menor para maior)", value: "low_rating" },
  ];

  const handleSelect = (value: SortType) => {
    setSort(value);
    setModalVisible(false);
  };

  useEffect(() => {
    if (sort) {
      sortAction(sort);
    }
  }, [sort])

  return (
    <View style={styles.container}>
      {/* Botão que abre o modal */}
      <TouchableOpacity 
        style={styles.filterButton} 
        onPress={() => setModalVisible(true)}
      >
        <Text 
          style={styles.selectText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {sort ? sortOptions.find(opt => opt.value === sort)?.label : "Ordenar por..."}
        </Text>
      </TouchableOpacity>

      <Modal 
        transparent={true} 
        visible={modalVisible} 
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Ordenar por
            </Text>
            
            <FlatList
              data={sortOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.option} 
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={styles.optionText}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  filterButton: {
    boxShadow: "0 0 2px 0px rgba(0,0,0,0.5)",
    borderRadius: 8,
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  selectText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: 300,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    boxShadow: "0 1px 0px 0px rgba(0,0,0,0.2)",
    marginBottom: 10,
  },
  optionText: {
    color: "#000",
    textAlign: 'center',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#dc3545",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
