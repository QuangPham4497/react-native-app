import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetailsScreen() {
  const { id, name } = useLocalSearchParams();
  if (!id || !name) return;

  const username = name.toString().toLocaleUpperCase();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        ID {id}: {username} needs to do
      </Text>
      <Ionicons name="checkmark-circle" size={30} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: "#e0e07f",
  },
});
