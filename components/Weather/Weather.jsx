import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  RefreshControl,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  AlertIOS,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { API_KEY, weatherConditions } from "../utils/WeatherApiKey";
import Toast from "react-native-simple-toast";
import { toast } from "../Toast/Toast";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Weather = () => {
  const [isloading, setIsloading] = useState(true);

  const [refreshing, setRefresh] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const _onRefresh = () => {
    setRefresh(true);
    wait(2000).then(() => {
      toast("Refresh");
      setRefresh(false);
    });
  };
  function featchWeatherData() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setError("Error Gettig Weather Condtions");
      }
    );
  }
  useEffect(() => {
    featchWeatherData();
  }, []);
  function fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        setWeather(json.weather[0].main);
        setTemperature(json.main.temp);
        setIsloading(false);
      });
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
      }
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {isloading ? (
        <Text>{error != null ? error : "...Loading"} </Text>
      ) : (
        <View
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={
            (styles.weatherContainer,
            { flex: 1, backgroundColor: weatherConditions[weather].color })
          }
        >
          <>
            <View style={styles.headerContainer}>
              <MaterialCommunityIcons
                size={48}
                name={weatherConditions[weather].icon}
                name="weather-sunny"
                color={"#fff"}
              />
              <Text style={styles.tempText}>{temperature}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>
                {weatherConditions[weather].title}
              </Text>
              <Text style={styles.subtitle}>
                {weatherConditions[weather].subtitle ?? null}
              </Text>
            </View>
          </>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: "#f7b733",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempText: {
    fontSize: 80,
    color: "#fff",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: "gray",
  },
  subtitle: {
    fontSize: 24,
    color: "gray",
  },
});

export default Weather;
