import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";

const ModalInfos = ({ modalVisible, setModalVisible, transaction }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTile}>Transaction informations</Text>

            <View style={styles.dataInfos}>
              <Text style={styles.modalTextTitle}>Block Number : </Text>
              <Text style={styles.modalText}>{transaction.blockNumber}</Text>
              <Text style={styles.modalTextTitle}>From : </Text>
              <Text style={styles.modalText}>{transaction.from}</Text>
              <Text style={styles.modalTextTitle}>To : </Text>
              <Text style={styles.modalText}>{transaction.to}</Text>
              <Text style={styles.modalTextTitle}>Hash : </Text>
              <Text style={styles.modalText}>{transaction.hash}</Text>
              <Text style={styles.modalTextTitle}>Gas : </Text>
              <Text style={styles.modalText}>{transaction.gas}</Text>
              <Text style={styles.modalTextTitle}>Transaction index : </Text>
              <Text style={styles.modalText}>
                {transaction.transactionIndex}
              </Text>
            </View>

            <Button
              title="Close"
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonStyle}>Close</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  },
  modalTile: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
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
  },
  modalTextTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
  closeButtonStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 50,
  },
});

export default ModalInfos;
