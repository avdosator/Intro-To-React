import List from '@mui/material/List';
import TodoListItem from './TodoListItem';
import { useState } from 'react';
import TodoForm from './TodoForm';
import { useEffect } from 'react';

const getData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) {
        return [];
    } else {
        return data;
    }      
}

export default function TodoList() {
    let [todos, setTodos] = useState(getData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function removeTodo(id) {
        setTodos((oldTodos) => {
            return oldTodos.filter((todo) => (todo.id !== id));
        })
    }

    function toggleTodo(id) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
        })
    }

    function addTodo(todoText) {
        setTodos(oldTodos => [...oldTodos, {id: crypto.randomUUID(), text: todoText, completed: false}]);
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    remove={() => removeTodo(todo.id)}
                    toggle={toggleTodo}
                />
            )}
            <TodoForm add={addTodo}/>
        </List>
    )
}

