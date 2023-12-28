import React, { useState } from "react"
import './App.css';


function App() {

  const [todo, setTodo] = useState([
    { todoId: 1, todo: "react를 배워봅시다." }
  ])

  const [goal, setGoal] = useState()

  const addBtnHendler = () => {
    const newTodo = {
      id: todo.length + 1,
      todo: goal,
    }
    setTodo([...todo, newTodo])
    setGoal("")
  }

  return (
    <div >
      <div className="inputBox">
        <input
          value={goal}
          onChange={(event) => {
            setGoal(event.target.value)
          }}
        />
        <button onClick={addBtnHendler}>
          추가하기
        </button>
      </div>
      <div className="mainHeader">
        <div className="headFont">Todo List</div>
      </div>
      <div className="todoBoxForm">
        {
          todo.map((item) => {
            return (
              <div key={item.todoId} className="todoBox">{item.todo}</div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
