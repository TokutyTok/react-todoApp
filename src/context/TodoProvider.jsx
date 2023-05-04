import { useState, createContext } from 'react';
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([
        { statusName: 'NOT STARTED', taskList: [] },
        { statusName: 'STARTED', taskList: [] },
        { statusName: 'COMPLETION', taskList: [] },
    ]);
    return (
        <TodoContext.Provider value={{ todo, setTodo, todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};
