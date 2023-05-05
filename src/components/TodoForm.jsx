import { Box, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export const TodoForm = (props) => {
    const { todo, setTodo, todoList, setTodoList } = props;
    return (
        <Box
            sx={{
                width: 250,
            }}
        >
            <TextField
                id='inputTodo'
                label=''
                type='text'
                name='inputTodo'
                size='small'
                sx={{ maxWidth: 160 }}
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
                    setTodoList(
                        todoList.map((value) => {
                            return value.statusName === 'NOT STARTED'
                                ? { statusName: 'NOT STARTED', taskList: [...value.taskList, todo] }
                                : value;
                        })
                    );
                }}
            >
                <AddIcon sx={{ fontSize: 18 }} />
            </IconButton>
        </Box>
    );
};
