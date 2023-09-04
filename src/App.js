
import './App.css';
import Header from './Components/Header';
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("i am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    console.log("I am Adding this todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to Erangel",
      desc: "lets go",
    },
    {
      sno: 2,
      title: "Go to Miramar",
      desc: "lets go",
    },
    {
      sno: 3,
      title: "Go to Sanhok",
      desc: "lets go",
    },
  ]);
  return (
    <>
      <Header title="Todos" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />


    </>
  );
}

export default App;
