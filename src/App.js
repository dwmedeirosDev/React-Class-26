import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const add = () =>{
    let coisasDoInput ={
      value: input,
      id: Date.now(),
      status: false
    }

    setList([...list, coisasDoInput])
    setInput("")
  }

  function DeleteTask(Rastreador){
     const ListaFiltrada = list.filter(item => item.id !==  Rastreador)
     setList(ListaFiltrada)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={input} onChange={(e) => { setInput(e.target.value); }}/> 
        <button onClick={() => {add()}}>+</button>
      </form>
      <ul>
        {list.map((item) => (
          <li>
          {item.value} 
          <button onClick={() =>{DeleteTask(item.id)}}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}