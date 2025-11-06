import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/styles/Color";

const index = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.principalTitle}>Electronics</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1.5,
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  titleContainer: {
    backgroundColor: Color.background_secondary,
    padding: 15,
    borderRadius: 20,
  },
  principalTitle: {
    textAlign: "center",
    fontSize: 40,
    color: Color.text_primary,
  },
});
