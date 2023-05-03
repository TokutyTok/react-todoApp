import { Box, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoList = (props) => {
    const { todoList, setTodoList } = props;
    return (
        <Box>
            {todoList.map((todo, index) => {
                return (
                    <div key={index}>
                        <TextField
                            id='outputTodo'
                            label=''
                            name='outputTodo'
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
                            <DeleteIcon fontSize='inherit' />
                        </IconButton>
                    </div>
                );
            })}
        </Box>
    );
};
