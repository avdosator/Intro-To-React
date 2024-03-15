import { useState } from "react";

export default function GitHubProfileSearchForm({search}) {
    let [username, setUsername] = useState("");
    function handleChange(e) {
        setUsername(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        search(username);
        setUsername("");
    }
    return (
        <div>
            <button onClick={handleSubmit} >Search</button>
            <input type="text" name="username" id="username" value={username} onChange={handleChange} />
        </div>
    )
}