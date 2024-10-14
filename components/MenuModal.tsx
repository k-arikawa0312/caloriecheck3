import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

interface AddMenu {
  menuTitle: string | undefined;
  ateAt: string | undefined;
  timeZone: string | undefined;
}

const MenuModal: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddMenu>({
    mode: "onChange",
  });
  const onSubmit = (data: AddMenu) => {
    console.log(data);
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalView}>
        {/* <View>
          <Text>食べもの</Text>
          <TextInput
          
            {...register("menuTitle")}
            onChangeText={(text) => setValue("menuTitle", text)}
            value={watch("menuTitle")}
          ></TextInput>
          <Text>食べた時間</Text>
          <TextInput
            {...register("ateAt")}
            onChangeText={(text) => setValue("ateAt", text)}
          ></TextInput>
          <Text>いつ食べた</Text>
          <TextInput
            {...register("timeZone")}
            onChangeText={(text) => setValue("timeZone", text)}
          ></TextInput>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.textStyle}>送信</Text>
          </TouchableOpacity>
        </View> */}
        <Controller
          control={control} // controlを指定
          name="menuTitle" // nameを指定
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur} // onBlurを設定
              onChangeText={onChange} // onChangeを設定1
              value={value} // valueを設定
            />
          )}
        />
        <Controller
          control={control} // controlを指定
          name="ateAt" // nameを指定
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur} // onBlurを設定
              onChangeText={onChange} // onChangeを設定
              value={value} // valueを設定
            />
          )}
        />
        <Controller
          control={control} // controlを指定
          name="timeZone" // nameを指定
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur} // onBlurを設定
              onChangeText={onChange} // onChangeを設定
              value={value} // valueを設定
            />
          )}
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>送信</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
});

export default MenuModal;
