import React from 'react';
import {TodosType} from "../App";

export type PropsType = {
    todos: Array<TodosType>
}
export const Todolist = ({todos}: PropsType) => {

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
            <ol>
                {result}
            </ol>
        </div>
    );
};

