import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../../types/CardProduct";
("../../types/CardProduct");

const CardProduct = ({ name, price, image, checked, deleted }: Product) => {
  return (
    <View style={styles.cardProductContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={styles.descContainer}>
          <View style={styles.imgContainer}>
            <Image source={image} />
          </View>
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
