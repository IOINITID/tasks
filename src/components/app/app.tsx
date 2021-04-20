import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import Task from "../task/task";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Task id="1" value="Some task..." complete={false} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          placeholder="Add some task..."
        />
      </View>
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
  inputContainer: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});

export default App;
