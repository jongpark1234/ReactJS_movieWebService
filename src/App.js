import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi")
    return () => console.log("Bye")
  })
  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}
export default App;
