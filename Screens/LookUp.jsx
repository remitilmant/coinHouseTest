import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchData } from "../Core/Api";
import TransactionTiles from "../Components/TransactionTile";
import ModalInfos from "../Components/ModalInfos";
import { useRoute } from "@react-navigation/native";
import { errorHandler } from "../Utils/ErrorHandler";
export function LookUp() {
  const route = useRoute();

  const [transactionsList, setTransactionsList] = useState([]);
  const [adress, setAdress] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState({});

  useEffect(() => {
    if (route?.params?.adress?.length > 0) {
      return setAdress(route?.params?.adress);
    }
  }, [route?.params?.adress]);

  const getTransaction = (adressInfo) => {
    if (adress) {
      setIsLoading(true);
      fetchData(
        adressInfo ? adressInfo : adress,
        "4WZZ7X9VWP9C9QTY3UC2YYSTY7JZACZ1NC",
        setTransactionsList,
        setIsLoading,
        errorHandler
      );
    } else {
      return alert("please enter valid ETHERUM adress");
    }
  };
  const upDateTransaction = (newAdress) => {
    setAdress(newAdress);
    setSelectedTransaction(newAdress);
    getTransaction(newAdress);
  };
  return (
    <View style={styles.container}>
      <View style={styles.adressContainer}>
        <Text style={styles.title}>Please enter a valid etherum adress:</Text>
        <TextInput
          placeholder="Ex : 0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC"
          placeholderTextColor="#ffff"
          style={styles.textInput}
          onChangeText={(e) => setAdress(e)}
          value={adress}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => getTransaction()}
        >
          <Text style={styles.button}>Lookup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={styles.list}
            data={transactionsList}
            renderItem={({ item }) => {
              return (
                <TransactionTiles
                  transaction={item}
                  to={item.to}
                  value={item.value}
                  modalSetter={setModalVisible}
                  setSelectedTransaction={setSelectedTransaction}
                  upDateTransaction={upDateTransaction}
                />
              );
            }}
            keyExtractor={(item) => item.hash}
            extraData={transactionsList}
          />
        )}
      </View>
      {modalVisible && (
        <ModalInfos
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          transaction={selectedTransaction}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222b45",
    display: "flex",
    flexDirection: "column",
    flex: 10,
    justifyContent: "space-between",
  },
  adressContainer: {
    margintop: 0,
    display: "flex",
    flex: 3,
    alignItems: "center",
    justifyContent: "space-around",
  },
  listContainer: {
    width: "100%",
    display: "flex",
    flex: 5,
  },
  title: {
    height: 40,
    marginTop: 12,
    padding: 10,
    color: "#ffffff",
  },
  textInput: {
    color: "#ffff",
    borderWidth: 1,
    borderColor: "#0047AB",
    padding: 5,
    minWidth: 350,
  },
  buttonContainer: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#3366ff",
  },
  button: {
    color: "white",
    fontSize: 17,
    padding: 10,
  },
});
