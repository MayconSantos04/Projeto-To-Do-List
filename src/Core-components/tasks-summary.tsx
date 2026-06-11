import Text from "../components/Text";
import Badge from "../components/Badge";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { CreatedtasksCount, concludedTaskCount } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{CreatedtasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Concluídas
        </Text>
        <Badge variant="primary">
          {concludedTaskCount} de {CreatedtasksCount}
        </Badge>
      </div>
    </>
  );
}
