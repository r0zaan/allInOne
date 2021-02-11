import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class TwoBanner extends React.Component {
  render() {
    const { width, height } = Dimensions.get("screen");
    return (
      <View
        style={{
          //   width: width,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Image
          source={{
            uri: this.props.BannerOne ? this.props.BannerOne.image_url : null,
          }}
          style={{ width: "48%", height: 100, marginRight: 5 }}
        />

        <Image
          source={{
            uri: this.props.BannerTwo ? this.props.BannerTwo.image_url : null,
          }}
          style={{ width: "48%", height: 100 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  imageStyle: {
    flexGrow: 1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TwoBanner;
