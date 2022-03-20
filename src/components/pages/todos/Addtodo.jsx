import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconpoints from '../../../assets/iconpoints.gif'

import styled from "styled-components";
import { todoActions } from "../../../store/todo";

const Container = styled.div`
  margin-top: 40px;
  background-color: #ebecf0;
  width: 270px;
  height: 90px;
  margin-left: 100px;
  border-radius: 4px;
  .InputContainer {
    padding-top: 20px;
    padding-left: 5px;
   
  }
   .inputs-img{
    display: flex;
    justify-content: space-between;
    width: 100px;
    
   }
   .anime{
     width: 30px;
    margin-left: 20px;
   }

  
  input {
    width: 250px;
    height: 30px;
    outline: none;
    border: gray solid;
    border-radius: 4px;
    ::placeholder {
      padding-left: 5px;
    }
    &:focus {
      border: 3px solid #0079bf;
    }
    .Button {
      margin-top: 4px;
      background-color: #0079bf;
      margin-left: 5px;
      border: none;
      color: #fff;
      height: 25px;
      border-radius: 4px;
    }
    .ButtonX {
      padding-top: 7px;
      display: flex;
      justify-content: space-between;
      margin: 3px;
      width: 160px;
    }
    .Div {
      background-color: gray;
      width: 250px;
      height: 30px;
      border-radius: 4px;
      opacity: 50%;
      && :hover {
        box-shadow: 1px 1px 10px blue;
      }
    }
    
  }
`;

const Addtodo = () => {
  const { showTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const showTodoHandler = () => {
    dispatch(todoActions.togleTodo());
  };

  const deleteHandler = () => {
    dispatch(todoActions.deleteTodo());
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValue("");
      return;
    }

    dispatch(
      todoActions.addTodo({
        task: value,
        id: Math.random().toString(),
      })
    );

    setValue("");
  };

  return (
    <Container>
      {showTodo ? (
        <div className="InputContainer">
          <div className="inputs-img" >
            <input
            value={value}
            type="text"
            onChange={(event) => setValue(event.target.value)}
          />
          <img src={iconpoints} alt=""  className="anime" />
          </div>
          

          <div className="ButtonX">
            <button onClick={onSubmit} className="Button">
              Добавить список
            </button>
            <button onClick={deleteHandler}>X</button>
          </div>
        </div>
      ) : (
        <div onClick={showTodoHandler} className="Div">
          <p> + Добавьте еще одну кнопку</p>
        </div>
      )}
    </Container>
  );
};

export default Addtodo;
