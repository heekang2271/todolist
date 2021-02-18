import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TODO = "todo";

const TodoListBox = styled.div`
    width: 100%;
    min-height: 200px;
    background-color: #F6EBD7;
    /* background: linear-gradient(135deg, #CCC1A6, #CCC1A6, #DFD8C8, #DFD8C8, #CCC1A6, #8B7F5C); */
`;

const TodoTitle = styled.div`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
`;

const TodoIcon = styled.div`
    & span {
        font-size: 26px;
        cursor: pointer;
    }

    & span:nth-child(1) {
        margin-right: 5px;
    }
`;

const TodoHolder = styled.ul`
    margin-top: 20px;
    padding: 0 10px;
    margin-bottom: 30px;
`;

const TodoLine = styled.li`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    width: 100%;
`;

const TodoCheck = styled.div`
    position: relative;
    & span {
        position: absolute;
        margin-top: 2px;
        font-size: 22px;
        cursor: pointer;
        z-index: 5;
    }

    & span:nth-child(2) {
        font-size: 30px;
        font-weight: bolder;
        margin: 0;
        top: -5px;
        left: -3px;
        z-index: 3;
    }
    width: 35px;
`;

const TodoForm = styled.form`
    width: 100%;
    height: 100%;
`;

const TodoInput = styled.input`
    background-color: transparent;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 2px solid #000;
    font-size: 17px;
    font-weight: 700;
    width: 100%;
    font-family: "Noto Sans KR";
    padding-bottom: 5px;
`;

const Todo = styled.p`
    width: 100%;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.5;
    padding-left: 2px;
`;

export default () => {
    const [toDo, setToDo] = useState(localStorage.getItem(TODO) ? JSON.parse(localStorage.getItem(TODO)) : [null]);
    const [deleteTodo, setDeleteTodo] = useState([]);
    
    const checkClick = (e, index) => {
        const { target } = e;
        const check = target.parentNode.children[1];
        if (check.innerText === "done") {
            check.innerText = "";
        } else {
            check.innerText = "done";
            setDeleteTodo([...deleteTodo, index]);
        }
    }

    const addClick = () => {
        setToDo([...toDo, null]);
    }

    const unCheck = () => {
        const checkArr = document.querySelectorAll(".check");
        deleteTodo.forEach(item => {
            checkArr[item].innerText = "";
        })
    }

    const deleteClick = () => {
        setToDo(toDo.filter((item, index) => !deleteTodo.includes(index)))
        unCheck();
        setDeleteTodo([]);
    }

    const handleSubmit = (e, index) => {
        e.preventDefault();
        const value = e.target.children[0].value;
        const newTodo = toDo.slice();
        newTodo[index] = value;
        setToDo(newTodo);
    }

    useEffect(() => {
        localStorage.setItem(TODO, JSON.stringify(toDo));
    }, [toDo])


    return (
        <TodoListBox>
            <TodoTitle>
                <span>TO DO LIST</span>
                <TodoIcon>
                    <span className="material-icons" onClick={ addClick }>post_add</span>
                    <span className="material-icons" onClick={ deleteClick }>delete</span>
                </TodoIcon>
            </TodoTitle>
            <TodoHolder>
                {toDo && (
                    toDo.map((item, index) => (
                        <TodoLine key={index}>
                            <TodoCheck>
                                <span className="material-icons" onClick={(e) => checkClick(e, index)}>check_box_outline_blank</span>
                                <span className="material-icons check"></span>
                            </TodoCheck>
                            {item !== null ? (
                                <Todo>{ item }</Todo>
                            ) : (
                                    <TodoForm onSubmit={(e) => handleSubmit(e, index)}>
                                        <TodoInput />
                                    </TodoForm>
                            )}
                        </TodoLine>
                    ))
                )}
            </TodoHolder>
        </TodoListBox>
    );
}