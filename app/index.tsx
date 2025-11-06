import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import Color from "../utils/styles/Color";
import List from "./List";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background_primary,
  },
});
