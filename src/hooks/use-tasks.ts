import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY } from "../models/task";
import type { Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTaskCount: tasks.filter(task => task.concluded === true).length,
  };
}