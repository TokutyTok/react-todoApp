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
                            onClick={() => {
                                console.log('moveButton:onClick');
                                setTodoList([
                                    {
                                        statusName: 'NOT STARTED',
                                        taskList:
                                            statusName === 'NOT STARTED'
                                                ? todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  )
                                                : statusName === 'STARTED'
                                                ? todoList[0].taskList
                                                : [
                                                      ...todoList[0].taskList,
                                                      todoList[statusIndex].taskList.filter(
                                                          (todo, i) => index === i
                                                      ),
                                                  ],
                                    },
                                    {
                                        statusName: 'STARTED',
                                        taskList:
                                            statusName === 'NOT STARTED'
                                                ? [
                                                      ...todoList[1].taskList,
                                                      todoList[statusIndex].taskList.filter(
                                                          (todo, i) => index === i
                                                      ),
                                                  ]
                                                : statusName === 'STARTED'
                                                ? todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  )
                                                : todoList[1].taskList,
                                    },
                                    {
                                        statusName: 'COMPLETION',
                                        taskList:
                                            statusName === 'NOT STARTED'
                                                ? todoList[2].taskList
                                                : statusName === 'STARTED'
                                                ? [
                                                      ...todoList[2].taskList,
                                                      todoList[statusIndex].taskList.filter(
                                                          (todo, i) => index === i
                                                      ),
                                                  ]
                                                : todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  ),
                                    },
                                ]);
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
                                setTodoList([
                                    {
                                        statusName: 'NOT STARTED',
                                        taskList:
                                            statusName === 'NOT STARTED'
                                                ? todoList[statusIndex].taskList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : todoList[0].taskList,
                                    },
                                    {
                                        statusName: 'STARTED',
                                        taskList:
                                            statusName === 'STARTED'
                                                ? todoList[statusIndex].taskList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : todoList[1].taskList,
                                    },
                                    {
                                        statusName: 'COMPLETION',
                                        taskList:
                                            statusName === 'COMPLETION'
                                                ? todoList[statusIndex].taskList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : todoList[2].taskList,
                                    },
                                ]);
                            }}
                            variant='standard'
                        />
                        <IconButton
                            aria-label='delete'
                            size='large'
                            type='submit'
                            onClick={() => {
                                console.log('deleteButton:onClick');
                                setTodoList([
                                    {
                                        statusName: 'NOT STARTED',
                                        taskList:
                                            statusName === 'NOT STARTED'
                                                ? todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  )
                                                : todoList[0].taskList,
                                    },
                                    {
                                        statusName: 'STARTED',
                                        taskList:
                                            statusName === 'STARTED'
                                                ? todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  )
                                                : todoList[1].taskList,
                                    },
                                    {
                                        statusName: 'COMPLETION',
                                        taskList:
                                            statusName === 'COMPLETION'
                                                ? todoList[statusIndex].taskList.filter(
                                                      (todo, i) => index !== i
                                                  )
                                                : todoList[2].taskList,
                                    },
                                ]);
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
