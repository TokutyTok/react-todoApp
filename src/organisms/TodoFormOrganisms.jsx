import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Typography, Grid } from '@mui/material';
import { TodoForm } from '../components/TodoForm';

export const TodoFormOrganisms = () => {
    const { todo, setTodo, todoList, setTodoList } = useContext(TodoContext);
    return (
        <Grid container>
            <Grid item lg={4}>
                <Typography variant='h5' component='h1'>
                    {'TODO APP'}
                </Typography>
                <TodoForm
                    todo={todo}
                    setTodo={setTodo}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            </Grid>
        </Grid>
    );
};
