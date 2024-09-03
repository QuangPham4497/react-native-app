import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";

export default function AppHeader() {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="menu"
        size={30}
        color="black"
        onPress={() => navigation.openDrawer()}
      />

      <Text style={styles.headerText}>MENU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: "center",
    position: "relative",
  },

  headerText: {
    position: "absolute",
    fontWeight: "800",
    fontSize: 30,
    left: "50%",
    transform: [{ translateX: -40 }],
  },
});
