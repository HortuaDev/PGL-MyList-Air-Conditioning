import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/Color";

const NavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonAdd}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>

        <Pressable style={styles.buttonDelete}>
          <Text style={styles.buttonText}>DELETE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarContainer: {
    flex: 1,
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: Color.background_thertiary,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 8,
  },
  buttonAdd: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 3,
    backgroundColor: Color.button_primary,
  },
  buttonDelete: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: Color.button_primary,
  },
  buttonText: { fontSize: 20 },
});
