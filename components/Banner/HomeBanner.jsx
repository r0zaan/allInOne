import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Slick from "react-native-slick";
class HomeBanner extends React.Component {
  render() {
    const dimensions = Dimensions.get("window");
    const imageHeight = Math.round((dimensions.width * 9) / 16);
    var { width } = Dimensions.get("window");
    return (
      <Slick style={styles.wrapper} height={220} loop={true} autoplay>
        {this.props.banners.map((banner, index) => (
          <View style={styles.slide1} key={index}>
            <Image
              width={width * 0.5}
              style={styles.logo}
              resizeMode={"cover"}
              source={{ uri: banner.image }}
            />
          </View>
        ))}
      </Slick>
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
  logo: {
    width: "100%",
    height: 220,
  },
});
export default HomeBanner;
