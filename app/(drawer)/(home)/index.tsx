import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

interface toDo {
  id: number;
  name: string;
  editMode?: boolean;
}
export default function HomeScreen() {
  //to do
  const [toDo, setToDo] = useState("");
  const [listToDo, setListToDo] = useState<toDo[]>([]);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  const handleSubmit = () => {
    //loi alert
    if (!toDo) {
      Alert.alert("Alert", "Cannot submit", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    //add to do
    setListToDo([...listToDo, { id: randomNumber(2, 100), name: toDo }]);
    setToDo(" ");
  };
  const deleteItem = (id: number) => {
    const newsToDo = listToDo.filter((item) => item.id != id);
    setListToDo(newsToDo);
  };
  const editItem = (id: number) => {
    setListToDo(
      listToDo.map((item) =>
        item.id === id ? { ...item, editMode: true } : item
      )
    );
    setEditItemId(id);
  };
  const handleSaveEdit = (id: number, updatedName: string) => {
    if (!updatedName) {
      alert("Please enter a name for the to-do item.");
      return;
    }
    setListToDo(
      listToDo.map((item) =>
        item.id === id ? { ...item, name: updatedName, editMode: false } : item
      )
    );
    setEditItemId(null);
  };

  const renderItem = ({ item }: { item: toDo }) => {
    return (
      <View style={styles.itemToDo}>
        {item.editMode ? (
          <>
            <TextInput
              style={styles.input}
              value={item.name}
              onChangeText={(text) => handleSaveEdit(item.id, text)}

              // onBlur={() => setEditItemId(null)}
            />
          </>
        ) : (
          <Link
            href={{
              pathname: "/details/[id]",
              params: { id: item.id, name: item.name },
            }}
          >
            <Text style={{ fontSize: 25 }}>{item.name}</Text>
          </Link>
        )}
        <View style={styles.iconButton}>
          {/* Edit button */}
          <Pressable
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            onPress={() => editItem(item.id)}
          >
            <Ionicons name="pencil" size={25} color="black" />
          </Pressable>
          {/* Delete button */}
          <Pressable
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            onPress={() => deleteItem(item.id)}
          >
            <MaterialCommunityIcons
              name="delete-forever"
              size={25}
              color="black"
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.toDoListContainer}>
        {/* header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>To Do List</Text>
          <Octicons name="tasklist" size={40} color="black" />
        </View>
        {/* form */}
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setToDo(value)}
            value={toDo}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button title="Submit" onPress={() => handleSubmit()} />
          </View>
        </View>
        {/* List to do */}
        <View style={styles.listToDo}>
          <Text
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: 30,
              marginBottom: 10,
            }}
          >
            List to do
          </Text>

          <FlatList
            keyExtractor={(item) => item.id + ""}
            data={listToDo}
            renderItem={(data) => renderItem(data)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  toDoListContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingTop: 0,
    backgroundColor: "#e0e07f",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    padding: 10,
    gap: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },
  listToDo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    flex: 1,
  },
  itemToDo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "dashed",
    borderBottomWidth: 1,
    padding: 5,
  },
  iconButton: { flexDirection: "row", gap: 5, marginHorizontal: 5 },
});
