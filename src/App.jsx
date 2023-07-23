import React, { useState } from "react";
import './style.css';
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if(todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index,1);
        setIncompleteTodos(newTodos);
    }

    const onClickCponplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        const newComplete = newIncompleteTodos.splice(index,1);
        setIncompleteTodos(newIncompleteTodos);
        const newCompleteTodos = [...completeTodos, newComplete];
        setCompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        const newIncomplete = newCompleteTodos.splice(index,1);
        setCompleteTodos(newCompleteTodos);
        const newIncompleteTodos = [...incompleteTodos, newIncomplete];
        setIncompleteTodos(newIncompleteTodos);
    }


    return (
    <>
    <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
    <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
            {
                incompleteTodos.map((todo,index) => {
                    return <IncompleteTodos key={index} index={index} todo={todo} onClickCponplete={onClickCponplete} onClickDelete={onClickDelete}/>
                })
            }
        </ul>
    </div>
    <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>

            {
                completeTodos.map((todo,index) => {
                    return <CompleteTodos key={index} index={index} todo={todo} onClickBack={onClickBack}/>
                })
            }
        </ul>
    </div>
    </>
    );
    }