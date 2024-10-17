import React from "react";
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

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

interface AddMenu {
  menuTitle: string;
  amount: number;
  ateAt: string;
  timeZone: string;
  calorie: number | string; //カロリー
  protein: number | string; //タンパク質
  lipid: number | string; //脂質
  carbohydrate: number | string; //糖質
  fiber: number | string; //食物繊維
  salt: number | string; //塩分
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const contentWidth = (windowWidth - 32) / 4;
const nutritions = [
  ["calorie", "protein", "lipid", "carbohydrate", "fiber", "salt"],
  ["カロリー", "タンパク質", "脂質", "糖質", "食物繊維", "塩分"],
];

const MenuModal: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddMenu>({
    mode: "onChange",
    defaultValues: {
      menuTitle: "",
      ateAt: "",
      timeZone: "",
      calorie: "",
      protein: "",
      lipid: "",
      carbohydrate: "",
      fiber: "",
      salt: "",
    },
  });
  const onSubmit = (data: AddMenu) => {
    console.log(data);
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
        <Text style={{ fontSize: contentWidth * 0.2 }}>食べたもの</Text>
        <Controller
          control={control}
          name="menuTitle"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputArea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        ></Controller>
        <Text style={{ fontSize: contentWidth * 0.2 }}>食べた時間</Text>
        <Controller
          control={control}
          name="ateAt"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputArea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Text style={{ fontSize: contentWidth * 0.2 }}>食事の種類</Text>
        <Controller
          control={control}
          name="timeZone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInputArea}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {nutritions[0].map((nutrition, index) => (
          <View key={nutrition}>
            <Text style={{ fontSize: contentWidth * 0.2 }}>
              {nutritions[1][index]}
            </Text>
            <Controller
              control={control}
              name={`${nutrition[0][index]}` as any} //後で型つける
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInputArea}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ""}
                />
              )}
            />
          </View>
        ))}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, styles.buttonClose]}
        >
          <Text style={{ color: "white" }}>送信</Text>
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
    height: windowHeight * 0.9,
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
});

export default MenuModal;
