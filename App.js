// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
} from "react-native";
import "react-native-gesture-handler";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./components/Home/Home";
import ProductPage from "./components/Product/ProductPage";
import Weather from "./components/Weather/Weather";
class App extends React.Component {
  static navigationOptions = {
    title: "Bagisto",
    headerStyle: {
      backgroundColor: "#84d6f4",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      backgroundColor: "#84d6f4",
    },
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Home {...this.props} />
          {/* <Button
            title="Right button"
            onPress={() => this.props.navigation.navigate("Product")}
          /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: App,
    Product: ProductPage,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#84d6f4",
      },
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#84d6f4",
      },
    },
  }
);

const WeatherNavigator = createStackNavigator(
  {
    Weather: Weather,
  },
  {
    initialRouteName: "Weather",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#84d6f4",
      },
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#84d6f4",
      },
    },
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 10,
  },
  scrollView: {
    marginHorizontal: 0,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: AppNavigator,
    Weather: WeatherNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Weather") {
          iconName = focused ? "ios-list" : "ios-list";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#84d6f4",
      inactiveTintColor: "black",
    },
  }
);
export default createAppContainer(TabNavigator);
