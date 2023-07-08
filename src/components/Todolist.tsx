import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TodosType} from "../App";


export type PropsType = {
    todos: Array<TodosType>
    addTodo: (value: string) => void
    removeTodo: (id: string) => void
    filterTodos: (value: FilterValuesType) => void
}
export const Todolist = ({todos, addTodo, removeTodo, filterTodos}: PropsType) => {
    const [value, setValue] = useState<string>('')


    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addTodoHandler = () => {
        addTodo(value)
        setValue('')
    }

    const addTodoKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTodoHandler()
        }
    }

    const onAllFilterHandler = () => {
        filterTodos('all')
    }

    const onCompletedFilterHandler = () => {
        filterTodos(true)
    }

    const onUnCompletedFilterHandler = () => {
        filterTodos(false)
    }


    const result = todos.map((todo) => {

        const removeTaskHandler = () => {
            removeTodo(todo.id)
        }

        return (
            <li key={todo.id}>
                <span>{todo.title}</span>
                <input type="checkbox" checked={todo.completed} readOnly/>
                <button onClick={removeTaskHandler}>x</button>
            </li>
        )
    })

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChangeEventHandler}
                onKeyPress={addTodoKeyPressHandler}
            />
            <button
                onClick={addTodoHandler}>+
            </button>
            <ul>
                {result}
            </ul>
            <button onClick={onCompletedFilterHandler}>Completed</button>
            <button onClick={onUnCompletedFilterHandler}>Not completed</button>
            <button onClick={onAllFilterHandler}>All</button>
        </div>
    );
};

