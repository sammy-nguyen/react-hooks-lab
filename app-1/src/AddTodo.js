import React, {useState} from "react";

function AddTodo(props) {
  const [inputText, setInput] = useState('')


function inputTextHandler(e){
  e.preventDefault()
  props.addTodo(inputText)
  setInput('')
}


  return(
    <form onClick={inputTextHandler}>
      <input placeholder="Add a todo!" value={inputText} onChange={(e) => setInput(e.target.value)}></input>
      <button>Submit</button><br></br>
    </form>
)}

export default AddTodo;
