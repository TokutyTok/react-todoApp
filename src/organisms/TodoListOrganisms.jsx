import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Typography, Grid } from '@mui/material';
import { TodoList } from '../components/TodoList';

export const TodoListOrganisms = () => {
    const { todoList, setTodoList } = useContext(TodoContext);
    return (
        <Grid container>
            {todoList.map((value, index) => {
                return (
                    <div key={index}>
                        <Grid item lg={4}>
                            <Typography variant='h6' component='h1'>
                                {value.statusName}
                            </Typography>
                            <TodoList
                                statusName={value.statusName}
                                statusIndex={index}
                                todoList={todoList}
                                setTodoList={setTodoList}
                            />
                        </Grid>
                    </div>
                );
            })}
        </Grid>
    );
};
