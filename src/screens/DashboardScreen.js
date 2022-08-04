import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { data } from "../.././src/data/data";
import Card from "../.././src/components/shared/Card";
import TitleText from "../.././src/components/shared/TitleText";
import AmountText from "../.././src/components/shared/AmountText";

import { colors } from "../../constants/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DashboardScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 15 }}>
      <HStack space={3} justifyContent="flex-start" alignItems="flex-start">
        {/* icon */}
        <Card>
          <Image
            style={{ width: 50, height: 50 }}
            source={item.icon}
            resizeMode="contain"
          />
        </Card>
        {/* info */}
        <Card>
          <View style={{ width: SCREEN_WIDTH - 110 }}>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <TitleText>{item.title}</TitleText>
              <AmountText>{item.amount}</AmountText>
            </HStack>
            <HStack marginTop="10px" justifyContent="space-between">
              <Text style={styles.infoTitle}>{item.infoTitle}</Text>
              <Text style={styles.amount}>{item.infoAmount}</Text>
            </HStack>
          </View>
        </Card>
      </HStack>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: SCREEN_WIDTH,
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  infoTitle: {
    color: colors.body,
    paddingTop: 2,
  },
  amount: {
    color: colors.secondary,
  },
});
