import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdateTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  function prepareTask() {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdateTask(true);
    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task,
      ),
    );

    setIsUpdateTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);
    true;

    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
