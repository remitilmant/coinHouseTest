import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function TransactionTiles(props) {
  const {
    to,
    value,
    transaction,
    modalSetter,
    upDateTransaction,
    setSelectedTransaction,
  } = props;

  const detailsInfos = () => {
    setSelectedTransaction(transaction);
    modalSetter(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/152/152360.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.dataContainer}>
        <Text onPress={() => detailsInfos()} style={styles.mainText}>
          {value} ETH
        </Text>
        <View style={styles.transactionNumber}>
          <Text style={styles.text}>To : </Text>
          <Text onPress={() => upDateTransaction(to)} style={styles.text}>
            {to}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 20,
  },
  imageView: { width: 40, height: 40, padding: 10 },
  dataContainer: {
    color: "fffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "flex-start",
  },
  image: { width: "50%", height: "50%", padding: 10 },
  mainText: { color: "white", fontWeight: "bold" },
  text: { color: "white", flexShrink: 1, margin: 2 },
  transactionNumber: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    flexShrink: 1,
  },
});
