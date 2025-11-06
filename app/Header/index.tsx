import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/Color";

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
    flex: 1,
    backgroundColor: "blue",
    paddingVertical: 20,
    paddingHorizontal: 15,
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
