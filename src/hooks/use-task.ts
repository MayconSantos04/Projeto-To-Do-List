import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

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

  return {
    tasks,
    setTasks,
    prepareTask,
  };
}