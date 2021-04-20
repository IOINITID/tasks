import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ITask {
  title: string;
}

const Task = ({ title }: ITask) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Task;
