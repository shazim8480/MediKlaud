import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../../.././constants/colors";

const AmountText = (props) => {
  return (
    <Text style={[{ ...styles.amountText, ...props.styles }]}>
      {props.children}
    </Text>
  );
};

export default AmountText;

const styles = StyleSheet.create({
  amountText: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.1,
  },
});
