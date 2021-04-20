import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Task from "../task/task";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Task id="1" value="Some task..." complete={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
