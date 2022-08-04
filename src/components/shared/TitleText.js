import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../../.././constants/colors";

const TitleText = (props) => {
  return (
    <Text style={[{ ...styles.titleText, ...props.styles }]}>
      {props.children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  titleText: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.1,
  },
});
