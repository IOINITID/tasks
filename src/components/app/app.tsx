import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatchTyped, useSelectorTyped } from "../../hooks";
import { addTask, selectTasks } from "../../features/tasks/tasksSlice";
import TaskList from "../task-list/task-list";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatchTyped();
  const tasks = useSelectorTyped(selectTasks);

  const addTaskHandler = () => {
    dispatch(addTask(inputValue));
    setInputValue("");
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 16,
        }}
      >
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            backgroundColor: "lightblue",
            flexDirection: "row",
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
          <TaskList tasks={tasks} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              flexGrow: 1,
              padding: 24,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#0080ff",
              borderRadius: 8,
              marginRight: 16,
            }}
            value={inputValue}
            keyboardType="default"
            keyboardAppearance="default"
            onChangeText={(text) => setInputValue(text)}
            placeholder="Add some task..."
          />
          <TouchableOpacity onPress={addTaskHandler}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                borderRadius: 8,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "tomato",
                backgroundColor: "tomato",
              }}
            >
              <Text style={{ fontWeight: "700", color: "#ffffff" }}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
