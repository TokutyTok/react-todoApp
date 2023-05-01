import { Container, Box } from '@mui/material';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const TodoOrganisms = () => {
    return (
        <Box>
            <Container maxWidth='xs'>
                <h1>TODO LIST</h1>
            </Container>
            <TodoForm />
            <TodoList />
        </Box>
    );
};
