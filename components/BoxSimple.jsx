import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
const BoxSimple = ({ children }) => (
  <View style={styles.boxSimple}>{children}</View>
);
const styles = StyleSheet.create({
  boxSimple: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#84d6f4",
    padding: 5,
    margin: 10,
    marginRight: 0,
    height: 300,
    shadowColor: "#84d6f4",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
BoxSimple.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BoxSimple;
