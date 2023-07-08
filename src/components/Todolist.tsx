import React, {ChangeEvent, useState} from 'react';
import {TodosType} from "../App";

export type PropsType = {
    todos: Array<TodosType>
    addTodo: (value: string) => void
}
export const Todolist = ({todos,addTodo }: PropsType) => {
    const [value, setValue] = useState<string>('')

    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addTodoHandler = () => {
        addTodo(value)
        setValue('')
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
            <input type="text"  value={value} onChange={onChangeEventHandler}/>
            <button onClick={addTodoHandler}>+</button>
            <ul>
                {result}
            </ul>
        </div>
    );
};

