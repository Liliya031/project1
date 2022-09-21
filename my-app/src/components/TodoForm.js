import React, { useState} from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState("");

const hanleSubmit = (event) => {
    event.preventDefault() 
    props.addTodo(input)
    setInput ("")
}
  return (

<form onSubmit={hanleSubmit} lassName="todo-form">

    <input className="todo-input" placeholder='What do you do today?' value={input} onChange={(event) => setInput (event.target.value)} name='text'/> 
    
    <button type ="submit" className='todo-button'> Add </button>
    </form>
 )}

