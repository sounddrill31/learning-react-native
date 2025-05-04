import { View } from "react-native";

const Spacer = ({ width = "100%", height = "100%" }) => {
  //default 100% for height and width
  return <View style={{ width, height }} />;
};

export default Spacer;
