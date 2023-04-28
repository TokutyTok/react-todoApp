import { useState } from 'react';
import { Container, Box, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TodoList } from '../components/TodoList';

export const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    return (
        <>
            <Container maxWidth='sm'>
                <Box>
                    <h1>TODO APP</h1>
                </Box>
                <Box>
                    <TextField
                        id='inputTodo'
                        label=''
                        type='text'
                        name='inputTodo'
                        value={todo}
                        onChange={(e) => {
                            console.log('inputTodo:onChange');
                            setTodo(e.target.value);
                        }}
                        variant='outlined'
                    />
                    <IconButton
                        aria-label='add'
                        size='large'
                        type='submit'
                        onClick={() => {
                            console.log('addButton:onClick');
                            setTodoList([...todoList, todo]);
                        }}
                    >
                        <AddIcon fontSize='inherit' />
                    </IconButton>
                </Box>
                <Box>
                    <TodoList todoList={todoList} setTodoList={setTodoList} />
                </Box>
            </Container>
        </>
    );
};
