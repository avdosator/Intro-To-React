function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form is not sending new request on submission!");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <h3>Prevent default action on submitting the form</h3>
            <button>Btn</button>
        </form>
    )
}