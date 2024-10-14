import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
}

interface AddMenu {
  menuTitle: string;
  ateAt: Date;
  timeZone: "朝" | "昼" | "晩" | "間食";
}

const MenuModal: React.FC<ModalComponentProps> = ({ visible, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddMenu>({
    mode: "onChange",
  });
  const onSubmit = (data: AddMenu) => {
    console.log(data);
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalView}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </form>
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
