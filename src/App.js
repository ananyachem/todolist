import React from "react"
import './App.css';
import {Heading, Input} from "@chakra-ui/react"



function App() {
  const [items, setItems]=React.useState([])
  const [item, setItem] = React.useState("Add")
  const handleChange = (e) => {
    e.preventDefault();
    setItem(e.target.value)
  }
  console.log(item);
  return (
<>
<Heading  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold">Todo List</Heading>
  <Input placeholder='Add Todo' htmlSize={20} width='auto' value={item} onChange={(e) => handleChange(e)} />
</>

  );
}

export default App;
