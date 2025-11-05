import { StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.principalTitle}>Electronicos</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: 50,
  },
  titleContainer: {
    backgroundColor: "green",
  },
  principalTitle: { textAlign: "center", fontSize: 40 },
});
