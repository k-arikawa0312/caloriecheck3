import { contentWidth } from "@/constants/Responsive";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from 'axios';
import { useIngredients } from "@/hooks/useIngredients";
import Constants from "expo-constants";


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<{
    Home: undefined; 
  }>;
};



export default  function Ingredients({navigation}:HomeScreenProps) {
  const [task, setTask] = useState(""); // 新しいタスクまたは編集中のタスクのテキスト
  interface Ingredients {
    id: string;
    ingredient: string;
    amount:number
  }

  const [tasks, setTasks] = useState<Ingredients[]>([]); // タスクのリスト
  const [isEditing, setIsEditing] = useState<string | null>(null); // 現在編集中のタスクのID
  const {ingredients,loading,error,addIngredient}=useIngredients()



  const renderIngredient = ({ item }: { item: Ingredients }) => (
    <View style={styles.ingredients}>
      <Text style={styles.taskText}>{item.ingredient}:{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
        <Ionicons name="home" size={30} color='#00a86b'/>
      </TouchableOpacity>
      <Text style={styles.title}>Ingredients</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#00a86b"/>
      ):
      <FlatList
        data={ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft:60,
    color: "#00a86b",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deleteButton: {
    marginLeft: 4,
  },
  editButton: {
    marginLeft: 4,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  ingredients: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#dadada",
    borderRadius: 5,
    borderColor:"#00a86b"
  },
  taskText: {
    maxWidth: "80%",
  },
  deleteButtonText: {
    color: "#dc3545",
  },
});