import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../utils/styles/Color";
import CardFooter from "../CardFooter";
import { FooterCard } from "../../types/CardFooter";

const Footer = () => {
  const footerCards: FooterCard[] = [
    { id: 1, title: "Products", value: 3 },
    { id: 2, title: "Selected", value: 2 },
    { id: 3, title: "Total (€)", value: 1800 },
  ];

  return (
    <View style={styles.footerContainer}>
      <View style={styles.totalTitleContainer}>
        <Text style={styles.totalTitle}>Total</Text>
      </View>
      <View style={styles.cardsContainer}>
        {footerCards.map((card) => (
          <CardFooter key={card.id} card={card} />
        ))}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 2,
    paddingHorizontal: 10,
    gap: 5,
  },
  totalTitleContainer: {
    backgroundColor: Color.background_secondary,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 5,
  },
  totalTitle: { color: Color.text_primary, textAlign: "center", fontSize: 20 },
  cardsContainer: { flex: 1, flexDirection: "row" },
});
