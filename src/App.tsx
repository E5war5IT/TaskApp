import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Title } from "./components/Title/Title"
import { CreateTaskButton } from "./components/createButton/createTaskButton";
import { Input } from "./components/InputCreateTask/InputCreateTask"; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

        <Title text="Task App" />

        <div style={{display: 'flex', flexDirection: 'row', height: '45px'}}>
         <Input type='text' />
         <CreateTaskButton />
        </div>

        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        
      </header>
    </div>
  )

}

export default App;