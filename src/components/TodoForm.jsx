import { useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';
import { Container, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const TodoForm = () => {
    const { todo, setTodo, todoList, setTodoList } = useContext(TodoContext);
    return (
        <Container maxWidth='xs'>
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
        </Container>
    );
};
