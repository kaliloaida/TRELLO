import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconpoints from "../../../assets/iconpoints.gif";

import styled from "styled-components";
import { todoActions } from "../../../store/todo";
import { useNavigationAway } from "../../../hooks/useCallbackPrompt";
import LeavePage from "../../../UI/Modalka/LeavePage";

const Container = styled.div`
  margin: 100px 50px 50px 50px;
  background-color: #ebecf0;
  width: 300px;
  height: 120px;

  border-radius: 4px;
  .InputContainer {
    padding-top: 20px;
    padding-left: 10px;
    width: inherit;
  }
  .inputs-img {
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
  .anime {
    width: 30px;
    margin-left: 20px;
  }

  input {
    margin-left: 20px;
    width: 270px;
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
  }
`;
const Button = styled.button`
  margin: 15px 0px 20px 20px;
  background-color: #0079bf;
  border: none;
  color: #fff;
  height: 25px;
  border-radius: 4px;
`;
const P = styled.p`
  background-color: #18d96b;
  margin: 30px;
  padding: 5px;
  width: 230px;
  height: 30px;
  border-radius: 4px;
  box-shadow: 2px 5px 5px 5px #18d98b;
`;

const Addtodo = () => {
  const { showTodo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [showLeave, setShowLeave] = useState(false);
  const [showDialogPrompt, confirmNavigation, cancelNavigation] =
    useNavigationAway(showLeave);

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
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    if (event.target.value !== "") {
      setShowLeave(true);
    } else {
      setShowLeave(false);
    }
  };

  return (
    <>
      {showDialogPrompt && (
        <LeavePage
          confirmNavigation={confirmNavigation}
          cancelNavigation={cancelNavigation}
        />
      )}
      <Container>
        {showTodo ? (
          <div className="InputContainer">
            <div className="inputs-img">
              <input value={value} type="text" onChange={inputChangeHandler} />
              <img src={iconpoints} alt="" className="anime" />
            </div>

            <Button onClick={onSubmit} className="Button">
              Добавить список
            </Button>
            <Button onClick={deleteHandler}>X</Button>
          </div>
        ) : (
          <div onClick={showTodoHandler}>
            <P> + Добавьте еще одну кнопку</P>
          </div>
        )}
      </Container>
    </>
  );
};

export default Addtodo;
