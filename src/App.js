import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (todo === '') {
      return
    }
    setTodos(currentArray => [todo, ...currentArray])
    setTodo('')
  }
  return ( 
    <div>
      <h1>My To Dos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={todo} 
          type='text' 
          placeholder="Write your to do..."
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>{todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  )
}
export default App;
