import { useRef, useState, useEffect } from 'react';
import { Container, Box, TextField, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const TodoPage = () => {
    const inputMessageRef = useRef(null);
    const [inputMessage, setInputMessage] = useState(null);
    const [isMessage, setIsMessage] = useState(false);

    useEffect(() => {
        if (inputMessage) {
            setIsMessage(true);
        }
    }, [inputMessage]);

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
                            setInputMessage(inputMessageRef.current.value);
                        }}
                    >
                        <AddIcon fontSize='inherit' />
                    </IconButton>
                    <IconButton aria-label='delete' size='large'>
                        <DeleteIcon fontSize='inherit' />
                    </IconButton>
                </Box>
                {isMessage && (
                    <Box>
                        <Checkbox aria-label='OutputTodo' />
                        <TextField id='output' name='outputMessage' value={inputMessage} label='' variant='standard' />
                    </Box>
                )}
            </Container>
        </>
    );
};
