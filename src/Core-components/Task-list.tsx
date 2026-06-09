import Button from "../components/Button";
import Plus from "../assets/icons/Plus.svg?react";
import TaskItem from "./Task-icon";

export default function TaskList() {
  return (
    <>
    <section className="mb-3">
      <Button icon={Plus} className="w-full">Nova tarefa</Button>
    </section>
    <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />    
    </section>
    </>
  );
}
