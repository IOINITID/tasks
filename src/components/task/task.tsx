import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ITask {
  id: string;
  value: string;
  complete: boolean;
}

const Task = ({ value }: ITask) => {
  return (
    <View
      style={{
        padding: 16,
        borderWidth: 1,
        borderColor: "#5cb85c",
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#5cb85c",
      }}
    >
      <Text style={{ color: "#ffffff" }}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Task;
