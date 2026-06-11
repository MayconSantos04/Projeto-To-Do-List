import React from "react";
import Card from "../components/Card";
import InputCheckbox from "../components/Input-checkbox";
import InputText from "../components/Input-text";
import ButtonIcon from "../components/Button-icon";
import Text from "../components/Text";
import Trash from "../assets/icons/Trash.svg?react";
import X from "../assets/icons/X.svg?react";
import PencilSimple from "../assets/icons/PencilSimple.svg?react";
import Check from "../assets/icons/Check.svg?react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/Skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTeskTitle] = React.useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTeskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-3">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text
              className={cx("flex-1", {
                "line-through": task?.concluded,
              })}
            >
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={Trash}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilSimple}
              variant="tertiary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-3">
          <>
            <InputText
              value={taskTitle}
              className="flex-1"
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex gap-1">
              <ButtonIcon
                type="button"
                icon={X}
                variant="secondary"
                onClick={handleExitEditTask}
              />
              <ButtonIcon
                type="submit"
                icon={Check}
                variant="primary"
                handling={isUpdatingTask}
              />
            </div>
          </>
        </form>
      )}
    </Card>
  );
}
