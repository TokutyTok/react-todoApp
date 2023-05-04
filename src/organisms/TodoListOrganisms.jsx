import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Typography, Grid } from '@mui/material';
import { TodoList } from '../components/TodoList';

export const TodoListOrganisms = () => {
    const { inputTodoList, setInputTodoList } = useContext(TodoContext);
    console.log(inputTodoList);
    return (
        <Grid container>
            {inputTodoList.map((value, index) => {
                return (
                    <div key={index}>
                        <Grid item lg={4}>
                            <Typography variant='h6' component='h1'>
                                {value.title}
                            </Typography>
                            <TodoList
                                title={value.title}
                                todoList={value.todoList}
                                inputTodoList={inputTodoList}
                                setInputTodoList={setInputTodoList}
                            />
                        </Grid>
                    </div>
                );
            })}
        </Grid>
    );
};
