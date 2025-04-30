import { StyleSheet, View, Text, Image } from "react-native";
import MyIMG from "../assets/favicon.png";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={MyIMG} style={styles.img} />

      <Text style={styles.title}>My App</Text>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        This is a simple mobile app
      </Text>

      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
    </View>
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
    backgroundColor: "eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  img: {
    marginVertical: 20,
  },
});
