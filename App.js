import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

import { colors } from "./constants/colors";

import Header from "./src/components/shared/Header";
import DashboardScreen from "./src/screens/DashboardScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <DashboardScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
