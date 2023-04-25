import { Container, Box, TextField, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoList = (props) => {
    const { message, setInputMessage } = props;
    return (
        <>
            {message.map((value, index) => {
                return (
                    <div key={index}>
                        <Checkbox aria-label='OutputTodo' />
                        <TextField
                            id='output'
                            name='outputMessage'
                            value={value}
                            onChange={(e) => {
                                console.log('TodoList:onChange');
                                setInputMessage(message.map((value, i) => (index === i ? e.target.value : value)));
                            }}
                            label=''
                            variant='standard'
                        />
                        <IconButton aria-label='delete' size='large'>
                            <DeleteIcon fontSize='inherit' />
                        </IconButton>
                    </div>
                );
            })}
        </>
    );
};
