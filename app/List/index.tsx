import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListProps, Product } from "../../types/CardProduct";
import CardProduct from "../CardProduct";

const List = ({ listProducts }: ListProps) => {
  return (
    <View style={styles.listContainer}>
      <ScrollView style={styles.scrollContainer}>
        {listProducts.map((product) => (
          <CardProduct product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: { flex: 6 },
  scrollContainer: { paddingHorizontal: 10 },
});
