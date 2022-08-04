import { Text, View } from "react-native";
import React from "react";
import { VStack, Center, Stack } from "native-base";

const Card = (props) => {
  return (
    <VStack alignItems="center">
      <Stack rounded="lg" bg="#fff" padding="8px" marginLeft={props.marginLeft}>
        {props.children}
      </Stack>
    </VStack>
  );
};

export default Card;
