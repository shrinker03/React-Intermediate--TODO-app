import React, {createContext} from 'react'
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    {id:1, task: "none", completed: false },
    {id:2, task: "n0one", completed: true }
]

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}

