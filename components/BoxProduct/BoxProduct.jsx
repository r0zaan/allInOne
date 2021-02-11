// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  Button,
  ScrollView,
} from "react-native";
import BoxSimple from "../BoxSimple";
import Slick from "react-native-slick";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";
import Ribbon from "../Ribbon/Ribbon";
class BoxProduct extends React.Component {
  onStarRatingPress(rating) {
    Alert.alert(rating);
  }

  render() {
    return (
      <>
        {this.props.products.length > 0 ? (
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flex: 1, flexDirection: "row", height: "100%" }}>
              {this.props.products.map((product, index) => {
                return (
                  <View style={styles.productbox} key={index}>
                    <BoxSimple>
                      <TouchableOpacity
                        style={styles.viewLayout}
                        onPress={() =>
                          this.props.navigation.navigate("Product")
                        }
                        key={index}
                      >
                        <Image
                          style={styles.logo}
                          resizeMode={"cover"}
                          source={{ uri: product.featured_image }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          paddingRight: 25,
                          paddingLeft: 25,
                          paddingTop: 5,
                          paddingBottom: 5,
                        }}
                      >
                        <StarRating
                          starSize={20}
                          disabled={false}
                          maxStars={5}
                          rating={1}
                          selectedStar={(rating) =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={"#9DD6EB"}
                        />
                      </View>
                      <Text style={styles.brand}>{product.brand}</Text>

                      <Text style={styles.name}>
                        {product.name} ({product.model_number})
                      </Text>
                      <Text style={styles.price}>Rs.{product.price}</Text>
                      <View style={styles.fixToText}>
                        <Icon
                          raised
                          name="shopping-cart"
                          type="font-awesome"
                          color="#84d6f4"
                          onPress={() => Alert.alert("Add to Cart")}
                        />

                        <Icon
                          raised
                          name="heart"
                          type="font-awesome"
                          color="red"
                          onPress={() =>
                            this.props.navigation.navigate("Product")
                          }
                        />
                      </View>
                    </BoxSimple>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <></>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  price: {
    color: "gray",
    fontSize: 13,
  },
  name: {
    backgroundColor: "white",
    fontSize: 13,
  },
  logo: {
    width: "100%",
    height: 130,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  defaultButton: {
    backgroundColor: "gray",
    color: "white",
  },
  wrapper: {
    height: "100%",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  productbox: {
    width: 200,
    marginBottom: 20,
  },
  brand: {
    fontSize: 12,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});

export default BoxProduct;
