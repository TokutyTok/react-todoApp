import { Box, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export const TodoList = (props) => {
    const { statusName, statusIndex, todoList, setTodoList } = props;
    return (
        <Box
            sx={{
                width: 250,
            }}
        >
            {todoList[statusIndex].taskList.map((todo, index) => {
                return (
                    <div key={index}>
                        <IconButton
                            aria-label='move'
                            size='large'
                            type='submit'
                            onClick={(e) => {
                                console.log('moveButton:onClick');

                                let copyTodoList = Object.assign(
                                    [],
                                    JSON.parse(JSON.stringify(todoList))
                                );

                                if (statusName === 'NOT STARTED') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                    copyTodoList[1].taskList.unshift(
                                        todoList[statusIndex].taskList[index]
                                    );
                                }

                                if (statusName === 'STARTED') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                    copyTodoList[2].taskList.unshift(
                                        todoList[statusIndex].taskList[index]
                                    );
                                }

                                if (statusName === 'COMPLETION') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                    copyTodoList[0].taskList.unshift(
                                        todoList[statusIndex].taskList[index]
                                    );
                                }

                                setTodoList(copyTodoList);
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

                                let copyTodoList = Object.assign(
                                    [],
                                    JSON.parse(JSON.stringify(todoList))
                                );

                                if (statusName === 'NOT STARTED') {
                                    copyTodoList[statusIndex].taskList[index] = e.target.value;
                                }

                                if (statusName === 'STARTED') {
                                    copyTodoList[statusIndex].taskList[index] = e.target.value;
                                }

                                if (statusName === 'COMPLETION') {
                                    copyTodoList[statusIndex].taskList[index] = e.target.value;
                                }

                                setTodoList(copyTodoList);
                            }}
                            variant='standard'
                        />
                        <IconButton
                            aria-label='delete'
                            size='large'
                            type='submit'
                            onClick={() => {
                                console.log('deleteButton:onClick');

                                let copyTodoList = Object.assign(
                                    [],
                                    JSON.parse(JSON.stringify(todoList))
                                );

                                if (statusName === 'NOT STARTED') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                }

                                if (statusName === 'STARTED') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                }

                                if (statusName === 'COMPLETION') {
                                    copyTodoList[statusIndex].taskList.splice(index, 1);
                                }

                                setTodoList(copyTodoList);
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
