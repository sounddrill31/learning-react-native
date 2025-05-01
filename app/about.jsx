import { StyleSheet, View, Text, Image } from "react-native";
const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
    </View>
  );
};

export default About;

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
