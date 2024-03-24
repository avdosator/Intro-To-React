import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css"
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './TodoList';
import Navbar from './Navbar';
import Banner from './React-18-Fundamentals/Banner';
import HouseList from './React-18-Fundamentals/HouseList';

function App() {

  return (
    <>
    <Banner />
    <HouseList />
    </>

  // Todo List App
    /*  <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </> */
  )
}

export default App
