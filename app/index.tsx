import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import Color from "../utils/styles/Color";
import List from "./List";
import { Product } from "../types/CardProduct";
import uuid from "react-native-uuid";
import Footer from "./Footer/Footer";

export default function App() {
  const listProducts: Product[] = [
    {
      id: uuid.v4(),
      name: "Samsung Split",
      price: 349.99,
      category: "Split de pared",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Cecotec Portátil",
      price: 259.99,
      category: "Portátil",
      checked: true,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Daikin Cassette",
      price: 799.99,
      category: "Cassette de techo",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "LG Multisplit",
      price: 999.99,
      category: "Multisplit",
      checked: false,
      deleted: false,
    },
    {
      id: uuid.v4(),
      name: "Panasonic Conducto",
      price: 1199.99,
      category: "Conducto centralizado",
      checked: false,
      deleted: false,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
      <List listProducts={listProducts} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background_primary,
  },
});
