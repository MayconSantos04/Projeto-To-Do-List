import Container from "../components/Container";
import TasksSummary from "../Core-components/tasks-summary";

export default function PageHome() {
  return (
    <>
      <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
          <TasksSummary />
        </header>
      </Container>
    </>
  );
}
