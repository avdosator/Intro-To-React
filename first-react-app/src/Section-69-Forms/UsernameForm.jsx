import { useState } from "react"

export default function UsernameForm() {
    let [username, setUsername] = useState("");
    function updateUsername(e) {
        setUsername(e.target.value);
    }
    return (
        <div>
            <input type="text" value={username} onChange={updateUsername} />
            <button>Submit</button>
        </div>
    )
}