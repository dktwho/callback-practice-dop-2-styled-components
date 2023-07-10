import React, {useState} from 'react';
import './App.css';
import {v4} from "uuid";
import {Todolist} from "./components/Todolist";

export type TodosType = {
    userId: string,
    id: string,
    title: string
    completed: boolean
}

export type FilterValuesType = 'all' | true | false

function App() {
    let data = [
        {userId: v4(), id: v4(), title: 'HTML', completed: true},
        {userId: v4(), id: v4(), title: 'CSS', completed: true},
        {userId: v4(), id: v4(), title: 'Vue', completed: false},
        {userId: v4(), id: v4(), title: 'React', completed: true},
        {userId: v4(), id: v4(), title: 'Redux', completed: false},
    ]

    let [todos, setTodos] = useState<TodosType[]>(data)
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const addTodo = (value: string) => {
        let newTodo = {userId: v4(), id: v4(), title: value, completed: false}
        setTodos([newTodo, ...todos])
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter((t) => t.id !== id))
    }

    let taskForTodoList = todos;
    const filterTodos = (value: FilterValuesType) => {
        setFilter(value)
    }

    if (filter === true) {
        taskForTodoList = todos.filter(t => t.completed === true)
    }
    if (filter === false) {
        taskForTodoList = todos.filter(t => t.completed === false)
    }
    if (filter === 'all') {
        taskForTodoList = todos.filter(t => t)
    }




    return (
        <div className="App">
            <Todolist todos={taskForTodoList} addTodo={addTodo} removeTodo={removeTodo} filterTodos={filterTodos} filter={filter}/>
        </div>
    );
}

export default App;
