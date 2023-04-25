import { useRef, useState, useEffect } from 'react';
import { Container, Box, TextField, Checkbox, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TodoList } from '../components/TodoList';

export const TodoPage = () => {
    const inputMessageRef = useRef(null);
    const todoListRef = useRef(null);
    const [inputMessage, setInputMessage] = useState([]);

    return (
        <>
            <Container maxWidth='sm'>
                <Box>
                    <h1>TODO APP</h1>
                </Box>
                <Box>
                    <TextField
                        ref={inputMessageRef}
                        id='input'
                        type='text'
                        name='inputMessage'
                        onChange={(e) => {
                            console.log('inputMessage:onChange');
                            inputMessageRef.current.value = e.target.value;
                        }}
                        label='Todo'
                        variant='outlined'
                    />
                    <IconButton
                        aria-label='add'
                        size='large'
                        type='submit'
                        onClick={() => {
                            console.log('addButton:onClick');
                            setInputMessage([...inputMessage, inputMessageRef.current.value]);
                        }}
                    >
                        <AddIcon fontSize='inherit' />
                    </IconButton>
                </Box>
                <Box ref={todoListRef}>
                    <TodoList message={inputMessage} setInputMessage={setInputMessage} />
                </Box>
            </Container>
        </>
    );
};
