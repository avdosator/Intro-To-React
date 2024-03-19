import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import Create from '@mui/icons-material/Create';
import IconButton from "@mui/material/IconButton"


import { useState } from 'react';

export default function TodoForm({ add }) {
    let [todoText, setTodoText] = useState("");
    function handleChange(e) {
        setTodoText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        add(todoText);
        setTodoText("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    placeholder="Enter new Todo"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    )
}