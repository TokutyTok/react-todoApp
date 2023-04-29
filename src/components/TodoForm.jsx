import { Box, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const TodoForm = (props) => {
    const { todo, setTodo, todoList, setTodoList } = props;
    return (
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
    );
};
