import List from '@mui/material/List';
import TodoListItem from './TodoListItem';
import { useState } from 'react';


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
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
               return <TodoListItem key={todo.id} todo={todo}/>
            })}
        </List>
    )
}

