import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
// const DATA = [
//   { id: "todo-0", name: "Eat", completed: true },
//   { id: "todo-1", name: "Do dishes", completed: false },
//   { id: "todo-2", name: "Repeat", completed: false },
// ];

const DATA = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(DATA);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)

