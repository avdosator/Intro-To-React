import { useState } from "react"

export default function SignUpForm() {
    let [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});
    function handleChange(e) {
        const changedField = e.target.name;
        const value = e.target.value;
        setFormData(oldData => {
            oldData[changedField] = value; // I dont get this really
            return {...oldData}
        })
    }
    
    function handleSubmit() {
        console.log(formData);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text"
                value={formData.firstName}
                onChange={handleChange}
                id="firstname"
                placeholder="first name"
                name="firstName"
            />
            <label htmlFor="lastname">Last Name</label>
            <input type="text"
                value={formData.lastName}
                onChange={handleChange}
                id="lastname"
                placeholder="last name"
                name="lastName"
            />
            <label htmlFor="password">Password</label>
            <input type="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}