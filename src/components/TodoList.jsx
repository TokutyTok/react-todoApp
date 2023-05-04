import { Box, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export const TodoList = (props) => {
    const { title, todoList, inputTodoList, setInputTodoList } = props;
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
                                setInputTodoList([
                                    {
                                        title: 'NOT STARTED',
                                        todoList:
                                            title === 'NOT STARTED'
                                                ? todoList.filter((todo, i) => index !== i)
                                                : title === 'STARTED'
                                                ? inputTodoList[0].todoList
                                                : [
                                                      ...inputTodoList[0].todoList,
                                                      todoList.filter((todo, i) => index === i),
                                                  ],
                                    },
                                    {
                                        title: 'STARTED',
                                        todoList:
                                            title === 'NOT STARTED'
                                                ? [
                                                      ...inputTodoList[1].todoList,
                                                      todoList.filter((todo, i) => index === i),
                                                  ]
                                                : title === 'STARTED'
                                                ? todoList.filter((todo, i) => index !== i)
                                                : inputTodoList[1].todoList,
                                    },
                                    {
                                        title: 'COMPLETION',
                                        todoList:
                                            title === 'NOT STARTED'
                                                ? inputTodoList[2].todoList
                                                : title === 'STARTED'
                                                ? [
                                                      ...inputTodoList[2].todoList,
                                                      todoList.filter((todo, i) => index === i),
                                                  ]
                                                : todoList.filter((todo, i) => index !== i),
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
                                setInputTodoList([
                                    {
                                        title: 'NOT STARTED',
                                        todoList:
                                            title === 'NOT STARTED'
                                                ? todoList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : inputTodoList[0].todoList,
                                    },
                                    {
                                        title: 'STARTED',
                                        todoList:
                                            title === 'STARTED'
                                                ? todoList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : inputTodoList[1].todoList,
                                    },
                                    {
                                        title: 'COMPLETION',
                                        todoList:
                                            title === 'COMPLETION'
                                                ? todoList.map((todo, i) =>
                                                      index === i ? e.target.value : todo
                                                  )
                                                : inputTodoList[2].todoList,
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
                                setInputTodoList([
                                    {
                                        title: 'NOT STARTED',
                                        todoList:
                                            title === 'NOT STARTED'
                                                ? todoList.filter((todo, i) => index !== i)
                                                : inputTodoList[0].todoList,
                                    },
                                    {
                                        title: 'STARTED',
                                        todoList:
                                            title === 'STARTED'
                                                ? todoList.filter((todo, i) => index !== i)
                                                : inputTodoList[1].todoList,
                                    },
                                    {
                                        title: 'COMPLETION',
                                        todoList:
                                            title === 'COMPLETION'
                                                ? todoList.filter((todo, i) => index !== i)
                                                : inputTodoList[2].todoList,
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
