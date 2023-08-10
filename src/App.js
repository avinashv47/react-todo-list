import {useState} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoOnEnter = (event) => {
    if(event.keyCode === 13) {
      setTodos([...todos, event.target.value])
    }
  }
  return (
    <div className="App">
      <div>
        <input type="text" className='input' onKeyUp={addTodoOnEnter}/>
        {todos.map((todo, index) =>{
          return (
            <div key={index} className='todo-item'>
              <input className='checkbox' type='checkbox'/>{todo}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
