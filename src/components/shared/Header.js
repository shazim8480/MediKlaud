import { View, Text, Image } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const Header = () => {
  return (
    <View style={{ paddingTop: 30, paddingBottom: 40, paddingHorizontal: 15 }}>
      <HStack justifyContent="space-between" alignItems="flex-start">
        {/* mediklaud logo */}
        <VStack space={3}>
          <Text style={{ fontSize: 20 }}>welcome to</Text>
          <View style={{ width: "100%" }}>
            <Image
              style={{ width: 200 }}
              source={require("../../.././assets/mediklaud-logo.png")}
              //   resizeMode="contain"
            />
          </View>
          <Text>Amazing Technology, Graceful Care</Text>
        </VStack>
        {/* health logo */}
        <VStack>
          <View>
            <Image
              style={{ width: 80, height: 70, marginLeft: 40 }}
              source={require("../../.././assets/hospital-logo.jpeg")}
              resizeMode="contain"
            />
          </View>
        </VStack>
      </HStack>
    </View>
  );
};

export default Header;
