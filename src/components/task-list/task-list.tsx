import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ITask } from "../../features/tasks/tasksSlice";
import Task from "../task/task";

interface ITaskList {
  tasks: ITask[];
}

const TaskList = ({ tasks }: ITaskList) => {
  return (
    <ScrollView style={{ padding: 8 }}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TaskList;
