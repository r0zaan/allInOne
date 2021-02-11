// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import BoxProduct from "../BoxProduct/BoxProduct";
import "react-native-gesture-handler";
import BoxCategory from "../BoxProduct/BoxCatgeory";
import HomeBanner from "../Banner/HomeBanner";
import TwoBanner from "../Banner/TwoBanner";
// import {  } from "react-native-gesture-handler";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefresh] = useState(false);
  const [featureProducts, setFeatureProduct] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [topBanners, setTopBanners] = useState({});
  const _onRefresh = () => {
    setRefresh(true);
    wait(2000).then(() => {
      setRefresh(false);
    });
  };
  function fetchHomedata() {
    fetch("http://demo.cgdigital.com.np/api/get-home-data")
      .then((response) => response.json())
      .then(
        (json) => (
          setFeatureProduct(json.data.featureProducts),
          setSliders(json.data.sliders),
          setTopBanners(json.data.topBanners)
        )
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchHomedata();
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
      }
    >
      <HomeBanner banners={sliders} />
      <TwoBanner
        BannerOne={topBanners.B1}
        BannerTwo={topBanners.B2}
        {...props}
      />
      <View style={styles.boxView}>
        <Text style={styles.titleText}>
          Hot Catgeories
          {"\n"}
        </Text>
        <BoxCategory style={{ flex: 1 }} {...props} />
      </View>
      <View style={styles.boxView}>
        <Text style={styles.titleText}>
          New Arrivals
          {"\n"}
        </Text>

        <BoxProduct style={{ flex: 1 }} {...props} products={featureProducts} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 0,
    paddingHorizontal: 15,
    height: 30,
    paddingVertical: 0,
    left: 10,
    borderLeftColor: "#90d6f4",
    borderLeftWidth: 5,
    fontWeight: "bold",
  },
  wrapper: {
    height: "100%",
  },
  boxView: {
    marginTop: 15,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
});
export default Home;
