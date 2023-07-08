import React, {useState} from 'react';
import './App.css';
import {v4} from "uuid";
import {Todolist} from "./components/Todolist";

type TodosType = {
    userId: string,
    id: string,
    title: string
    completed: boolean
}

function App() {
    let data = [
        {userId: v4(), id: v4(), title: 'HTML', completed: true},
        {userId: v4(), id: v4(), title: 'CSS', completed: true},
        {userId: v4(), id: v4(), title: 'Vue', completed: false},
        {userId: v4(), id: v4(), title: 'React', completed: true},
        {userId: v4(), id: v4(), title: 'Redux', completed: false},
    ]

    let [todos, setTodos] = useState<TodosType[]>(data)

    console.log(todos)
    return (
        <div className="App">

        </div>
    );
}

export default App;
