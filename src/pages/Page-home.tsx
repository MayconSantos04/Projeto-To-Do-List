import Container from "../components/Container";
import TasksSummary from "../Core-components/tasks-summary";
import TaskItem from "../Core-components/Task-icon";

export default function PageHome() {
  return (
    <>
      <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
          <TasksSummary />
        </header>

        <TaskItem />
      </Container>
    </>
  );
}
