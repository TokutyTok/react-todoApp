import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Typography, Grid } from '@mui/material';
import { TodoList } from '../components/TodoList';

export const TodoListOrganisms = () => {
    const { todoList, setTodoList } = useContext(TodoContext);
    return (
        <Grid container>
            <Grid item lg={4}>
                <Typography variant='h6' component='h1'>
                    {'NOT START'}
                </Typography>
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Grid>
            <Grid item lg={4}>
                <Typography variant='h6' component='h1'>
                    {'STARTED'}
                </Typography>
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Grid>
            <Grid item lg={4}>
                <Typography variant='h6' component='h1'>
                    {'COMPLETION'}
                </Typography>
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </Grid>
        </Grid>
    );
};
