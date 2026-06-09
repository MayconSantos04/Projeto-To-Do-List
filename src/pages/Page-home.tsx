import Container from "../components/Container";
import TasksSummary from "../Core-components/tasks-summary";
import TaskList from "../Core-components/Task-list";

export default function PageHome() {
  return (
    <>
      <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
          <TasksSummary />
        </header>

        <div>
          <TaskList />
        </div>
      </Container>
    </>
  );
}
