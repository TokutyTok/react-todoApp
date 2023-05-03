import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Box, Typography } from '@mui/material';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export const TodoOrganisms = (props) => {
    const { todo, setTodo, todoList, setTodoList } = useContext(TodoContext);
    return (
        <Box>
            <Typography variant='h5' component='h1'>
                {props.title}
            </Typography>
            <TodoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Box>
    );
};
