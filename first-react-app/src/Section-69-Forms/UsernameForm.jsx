import { useState } from "react"

export default function UsernameForm() {
    let [username, setUsername] = useState("");
    function updateUsername(e) {
        setUsername(e.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Username</label>
            <input type="text"
                value={username}
                onChange={updateUsername}
                id="username"
                placeholder="username"
                 />
            <button>Submit</button>
        </div>
    )
}