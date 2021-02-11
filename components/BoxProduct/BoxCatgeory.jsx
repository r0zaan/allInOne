// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Slick from "react-native-slick";
const BoxCategory = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://demo.cgdigital.com.np/api/get/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json.data.category))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{ flex: 1, flexDirection: "row" }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              style={styles.viewLayout}
              onPress={() => props.navigation.navigate("Product")}
              key={index}
            >
              <Image
                source={{ uri: category.image }}
                style={styles.imageStyl}
              />
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{category.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "gray",
    margin: 10,
    marginRight: 0,
    width: 200,
    height: 100,
  },
  imageStyl: {
    borderRadius: 5,
    borderWidth: 0.5,
    flexGrow: 1,
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  viewStyle: {
    borderRadius: 5,
    borderWidth: 0.5,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000073",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BoxCategory;
