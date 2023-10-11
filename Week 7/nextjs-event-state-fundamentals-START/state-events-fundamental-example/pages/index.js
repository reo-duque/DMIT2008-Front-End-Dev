import Container from '@mui/material/Container';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <main>
      <Container>
        <TodoList />
      </Container>
    </main>
  )
}
