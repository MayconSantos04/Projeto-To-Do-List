import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    CreatedtasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTaskCount: tasks.filter((task) => task.concluded === true).length,
  };
}
