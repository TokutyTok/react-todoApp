import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    return (
        <Box>
            <Container maxWidth='xs'>
                <h1>TODO LIST</h1>
            </Container>
            <TodoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Box>
    );
};
