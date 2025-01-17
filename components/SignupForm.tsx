import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
// import { addUser } from "@/hooks/useSignup";



interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

interface AddUser {
    email: string;
    password: string;
    name: string;
    age: number|string;
    weight: number|string;
    height: number|string;
    gender: "male"|"female";
}

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const contentWidth = (windowWidth - 32) / 4;
  const userInfo=[
  ["email","password","name","age","height","weight"],
  ["メールアドレス","パスワード","ユーザーネーム","年齢","身長","体重"]
]

// const auth=firebase.auth()
const SignupForm: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  // const [user, setUser] = useState<firebase.User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddUser>({
    mode: "onChange",
    defaultValues: {
      email:"",
      password:"",
      name:"",
      age:"",
      weight:"",
      height:"",
      gender:"male"  
    },
  });
  const onSubmit = (data: AddUser) => {
    // const addUserInfo = addUser(data)
    // console.log(addUserInfo)
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalView}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={contentWidth * 0.3} />
          </TouchableOpacity>
        </View>
        {userInfo[0].map((info,index)=>(
            <View key={info} style={{ alignItems: "center" }}>
            <Text style={{ fontSize: contentWidth * 0.2 }}>
              {userInfo[1][index]}
            </Text>
            <Controller
              control={control}
              name={info as keyof AddUser}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInputArea}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value ? value.toString() : ""}
                />
              )}
            />
          </View>
        ))}
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <View style={{alignItems:"center"}}>
              <Text style={{alignItems:"center",fontSize:20}}>性別</Text>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="男性" value="male" />
                <Picker.Item label="女性" value="female" />
              </Picker>
            </View>
          )}
        />
        {errors.gender && <Text>性別を選択してください。</Text>}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, styles.buttonClose]}
        >
          <Text style={{ color: "white" }}>新規登録</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    fontSize: contentWidth * 0.2,
    height: windowHeight * 0.6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 30,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInputArea: {
    borderWidth: 1,
    borderColor: "Black",
  },
  picker:{
    width:contentWidth*0.7
  }
});

export default SignupForm;
