import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function TransactionTiles(props) {
  const { to, value, transaction } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/152/152360.png",
        }}
        style={styles.image}
      />
      <View style={styles.dataContainer}>
        <Text style={styles.text}> {value} ETH</Text>
        <Text style={styles.text}>To : {to} </Text>
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
    justifyContent: "flex-start",
  },
  dataContainer: {
    color: "fffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  image: { width: 20, height: 30 },
  text: { color: "white" },
});
