import Button from "../components/Button";
import Plus from "../assets/icons/Plus.svg?react";
import TaskItem from "./Task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

export default function TaskList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section className="mb-3">
        <Button
          icon={Plus}
          className="w-full"
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {/* <TaskItem /> */}
      </section>
    </>
  );
}
