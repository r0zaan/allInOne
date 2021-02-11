import React from "react";
import { Text, View } from "react-native";

export default function Ribbon() {
  return (
    <>
      <View
        style={{
          width: 100,
          padding: 10,
          paddingLeft: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          height: 30,
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Overview</Text>
      </View>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderRightWidth: 20,
          borderTopWidth: 20,
          borderRightColor: "transparent",
          borderTopColor: "red",
          transform: [{ rotate: "90deg" }],
        }}
      />
    </>
  );
}
