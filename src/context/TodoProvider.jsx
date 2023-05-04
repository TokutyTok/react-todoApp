import { useState, createContext } from 'react';
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState('');
    const [inputTodoList, setInputTodoList] = useState([
        { title: 'NOT STARTED', todoList: [] },
        { title: 'STARTED', todoList: [] },
        { title: 'COMPLETION', todoList: [] },
    ]);
    return (
        <TodoContext.Provider value={{ todo, setTodo, inputTodoList, setInputTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};
