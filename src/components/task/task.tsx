import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ITask {
  id: string;
  value: string;
  complete: boolean;
}

const Task = ({ value }: ITask) => {
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Task;
