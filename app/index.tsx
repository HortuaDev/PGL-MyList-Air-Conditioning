import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import NavBar from "./NavBar";
import Color from "../utils/Color";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background_primary,
  },
});
