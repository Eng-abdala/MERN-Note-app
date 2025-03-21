import Note from "./Components/note"
import Home from "./Components/Home"
import {Route,Routes} from "react-router-dom"
const App = ()=>{
  return <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/note" element={<Note/>}  />
  </Routes>
}


export default App