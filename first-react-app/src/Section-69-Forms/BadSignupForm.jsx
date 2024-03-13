import { useState } from "react"

export default function BadSignupForm() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    function updateFirstName(e) {
        setFirstName(e.target.value);
    }
    function updateLastName(e) {
        setLastName(e.target.value);
    }
    function handleSubmit() {
        console.log(firstName, lastName);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text"
                value={firstName}
                onChange={updateFirstName}
                id="firstname"
                placeholder="first name"
            />
            <label htmlFor="lastname">Last Name</label>
            <input type="text"
                value={lastName}
                onChange={updateLastName}
                id="lastname"
                placeholder="last name"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}