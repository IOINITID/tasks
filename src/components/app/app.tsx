import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Task from "../task/task";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Task title="Some task..." />
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
