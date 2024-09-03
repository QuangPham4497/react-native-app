import { StyleSheet, Text, View } from "react-native";

export default function creditScreen() {
  return (
    <View style={styles.container}>
      <Text>Credit Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#e0e07f",
  },
});
