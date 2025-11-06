import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product, ProductProps } from "../../types/CardProduct";

const CardProduct = ({ product }: ProductProps) => {
  const { id, name, price, category, checked, deleted } = product;

  return (
    <View key={id} style={styles.cardProductContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.imgContainer}>{/* <Image source={} /> */}</View>
          <View style={styles.priceContainer}>
            <Text>{price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsConatiner}>
        <View style={styles.checkButton}></View>
        {deleted && <View style={styles.deleteButton}></View>}
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  cardProductContainer: {},
  infoContainer: {},
  nameContainer: {},
  descContainer: {},
  imgContainer: {},
  priceContainer: {},
  buttonsConatiner: {},
  checkButton: {},
  deleteButton: {},
});
