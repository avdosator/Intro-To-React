import List from '@mui/material/List';
import TodoListItem from './TodoListItem';
import { useState } from 'react';
import TodoForm from './TodoForm';

const initialTodos = () => {
    return [
        { id: 1, text: "Clean the house", completed: false },
        { id: 2, text: "Walk the dog", completed: false },
        { id: 3, text: "Feed cows", completed: false },
        { id: 4, text: "Go to market", completed: true }
    ]
}

export default function TodoList() {
    let [todos, setTodos] = useState(initialTodos());
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

