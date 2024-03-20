import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}

export default App
