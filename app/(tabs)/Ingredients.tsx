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
import { Picker } from "@react-native-picker/picker";


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
    done:boolean
  }

  const [tasks, setTasks] = useState<Ingredients[]>([]); // タスクのリスト
  const [isEditing, setIsEditing] = useState<string | null>(null); // 現在編集中のタスクのID
  const {ingredients,loading,error,addIngredient,checkIngredient}=useIngredients()
  const [newIngredient, setNewIngredient] = useState(""); // 新しいingredientの状態を追加
  const [amount, setAmount] = useState<string>("");
  const [unit, setUnit] = useState<string>("個")

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      console.log(amount+unit)
      addIngredient(  newIngredient, amount,unit ); 
      setNewIngredient(""); 
    }
  };

  

  const renderIngredient = ({ item }: { item: Ingredients }) => (
    <View style={styles.ingredients}>
      <Text style={styles.taskText}>{item.ingredient}:{item.amount}</Text>
      <TouchableOpacity onPress={() => checkIngredient(item.id, item.done)}>
        {item.done?
          <Ionicons name="key" size={20}/>
          :
          <Ionicons name="push"size={20}/>
          }
      </TouchableOpacity>
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
      ):(
      <View>  
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="新しい材料を入力"
          value={newIngredient}
          onChangeText={setNewIngredient}
        />
        <View style={styles.amountContainer}>
        <TextInput
          style={styles.input}
          placeholder="食材の量"
          value={String(amount)}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
            <View style={{alignItems:"center"}}>
              <Picker
                selectedValue={unit}
                onValueChange={(itemValue) => setUnit(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="個" value="numberOf" />
                <Picker.Item label="g" value="g" />
              </Picker>
            </View>
        </View>  
      </View>
      <TouchableOpacity onPress={handleAddIngredient} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>追加</Text>
      </TouchableOpacity>
      <FlatList
        data={ingredients}
        renderItem={renderIngredient}
        keyExtractor={(item) => item.id}
      />
      </View>
      )
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
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
  picker:{
    width:contentWidth*0.7
  },
  amountContainer:{
    flexDirection:"row"
  }
});