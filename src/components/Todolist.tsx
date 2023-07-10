import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TodosType} from "../App";
import {Button} from "./Button";
import styled from "styled-components";


export type PropsType = {
    todos: Array<TodosType>
    addTodo: (value: string) => void
    removeTodo: (id: string) => void
    filterTodos: (value: FilterValuesType) => void
    filter: FilterValuesType
}
export const Todolist = ({todos, addTodo, removeTodo, filterTodos, filter}: PropsType) => {
    const [value, setValue] = useState<string>('')


    const onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addTodoHandler = () => {
        if (value === '') {
            return
        }
        addTodo(value.trim())
        onAllFilterHandler()
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
                <Button callBack={() => removeTaskHandler()} name={'x'}/>
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
            <Button callBack={() => addTodoHandler()} name={'+'}/>
            <ul>
                {result}
            </ul>
            <Button callBack={() => onAllFilterHandler()} name={'All'}/>
            <Button callBack={() => onCompletedFilterHandler()} name={'Completed'}/>
            <Button callBack={() => onUnCompletedFilterHandler()} name={'Not completed'}/>
        </div>
    );
};


