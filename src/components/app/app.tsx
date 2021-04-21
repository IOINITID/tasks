import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Task from "../task/task";
import { useDispatchTyped } from "../../hooks";
import { addTask, selectTasks } from "../../features/tasks/tasksSlice";
import { useSelector } from "react-redux";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatchTyped();
  const tasks = useSelector(selectTasks);

  useEffect(() => {}, []);

  const addTaskHandler = () => {
    dispatch(addTask(inputValue));
    setInputValue("");
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar hidden />
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              complete={task.complete}
            />
          );
        })}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputValue}
            keyboardType="default"
            keyboardAppearance="default"
            onChangeText={(text) => setInputValue(text)}
            placeholder="Add some task..."
            onSubmitEditing={addTaskHandler}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
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
