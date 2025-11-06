import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const List = () => {
  return (
    <View style={styles.listContainer}>
      <ScrollView style={styles.scrollContainer}></ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: { flex: 10 },
  scrollContainer: {},
});
