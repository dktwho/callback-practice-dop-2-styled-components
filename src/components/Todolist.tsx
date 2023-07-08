import React, {useState} from 'react';
import {TodosType} from "../App";

export type PropsType = {
    todos: Array<TodosType>
    addTodo: () => void
}
export const Todolist = ({todos,addTodo }: PropsType) => {
    const [value, setValue] = useState<string>('')


    const addTodoHandler = () => {
        addTodo()
    }

    const result = todos.map((todo) => {
        return (
            <li key={todo.id}>
                <span>{todo.title}</span>
                <input type="checkbox" checked={todo.completed} readOnly/>
            </li>
        )
    })

    return (
        <div>
            <input type="text"  value={value} onChange={() => {}}/>
            <button onClick={addTodoHandler}>+</button>
            <ul>
                {result}
            </ul>
        </div>
    );
};

