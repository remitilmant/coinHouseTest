import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { fetchData } from "../Core/Api";
import TransactionTiles from "../Components/TransactionTile";

export function LookUp() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [adress, setAdress] = useState(
    "0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC"
  );
  const [isLoading, setIsLoading] = useState(false);

  const getTransaction = () => {
    setIsLoading(true);
    fetchData(adress, "", setTransactionsList, setIsLoading);
  };

  return (
    <View style={styles.container}>
      <View style={styles.adressContainer}>
        <Text style={styles.title}>Please enter a valid etherum adress:</Text>
        <TextInput
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
          <Text>CHARGEMENT</Text>
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
                />
              );
            }}
            keyExtractor={(item) => item.blockHash}
            extraData={transactionsList}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222b45",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 10,
    justifyContent: "flex-start",
  },
  adressContainer: {
    marginTop: 5,
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
  textInput: { color: "#a8abb5", borderWidth: 1 },
  buttonContainer: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#3366ff",
    color: "red",
  },
  button: {
    color: "white",
    fontSize: 17,
  },
});
