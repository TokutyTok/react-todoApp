import { Box, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export const TodoList = (props) => {
    const { todoList, setTodoList } = props;
    return (
        <Box
            sx={{
                width: 250,
            }}
        >
            {todoList.map((todo, index) => {
                return (
                    <div key={index}>
                        <IconButton
                            aria-label='move'
                            size='large'
                            type='submit'
                            onClick={() => {
                                console.log('moveButton:onClick');
                                setTodoList(todoList.filter((todo, i) => index !== i));
                            }}
                        >
                            <DoneIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                        <TextField
                            id='outputTodo'
                            label=''
                            name='outputTodo'
                            size='small'
                            sx={{ maxWidth: 160 }}
                            value={todo}
                            onChange={(e) => {
                                console.log('TodoList:onChange');
                                setTodoList(
                                    todoList.map((todo, i) => (index === i ? e.target.value : todo))
                                );
                            }}
                            variant='standard'
                        />
                        <IconButton
                            aria-label='delete'
                            size='large'
                            type='submit'
                            onClick={() => {
                                console.log('deleteButton:onClick');
                                setTodoList(todoList.filter((todo, i) => index !== i));
                            }}
                        >
                            <DeleteIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                );
            })}
        </Box>
    );
};
