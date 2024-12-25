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
} from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

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
  }

  const [tasks, setTasks] = useState<Ingredients[]>([]); // タスクのリスト
  const [isEditing, setIsEditing] = useState<string | null>(null); // 現在編集中のタスクのID
  
  useEffect(()=> {
    const fetchIngredients = async  () => {
      try{
        const res = await fetch("http://localhost:8081/api/ingredients",{
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
          },
        })
        console.log('tinko')
        console.log(res)
        const data = await res.json();
        console.log(data.id)
      }catch(e){
        console.error(e)
      }
    }
    fetchIngredients()
  },[])



  // const renderTask = ({ item }: { item: Ingredients }) => (
  //   <View style={styles.task}>
  //     <Text style={styles.taskText}>{item.ingredient}</Text>
  //     <View style={styles.buttonContainer}>
  //       <TouchableOpacity
  //         style={styles.editButton}
  //       //   onPress={() => handleEditTask(item)}
  //       >
  //       <Text>hennsyuu</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={styles.deleteButton}
  //       //   onPress={() => handleDeleteTask(item.id)}
  //       >
  //       <Text>sakujo</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
        <Ionicons name="home" size={30} color='black'/>
        {/* <Text>aaa</Text> */}
      </TouchableOpacity>
      {/* <Text style={styles.title}>ToDoアプリ</Text>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.saveButton} >
        <Text style={styles.saveButtonText}>{isEditing ? "更新" : "追加"}</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      /> */}
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
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
  },
  deleteButtonText: {
    color: "#dc3545",
  },
});