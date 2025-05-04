import { StyleSheet, View, Text, Image } from "react-native";
import MyIMG from "../assets/favicon.png";
import AboutPage from "./about.jsx";
import ThemedView from "../components/ThemedView";
import ThemedCard from "../components/ThemedCard";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer.jsx";

const Home = () => {
  return (
    <ThemedView style={[styles.container]}>
      <Image source={MyIMG} style={styles.img} />

      <ThemedText style={styles.title} title={true}>
        My App
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>This is a simple mobile app</ThemedText>
      <Spacer height={10} />

      <ThemedCard href="./about">
        <ThemedText>About this App</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  card: {
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  img: {
    marginVertical: 20,
  },
});
