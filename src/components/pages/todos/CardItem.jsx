import styled from "styled-components";
import { todoActions } from "../../../store/todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CardItemList from "./CardItemList";

const Container = styled.div`
  margin-top: 40px;
  background-color: #ebecf0;
  width: 270px;
  margin-left: 100px;
  border-radius: 4px;
  margin-bottom: 20px;
  .InputContainer {
    padding-top: 20px;
    padding-left: 5px;
  }
  h4 {
    margin: 8px;
    background-color:yellow;
    align-items: center;
    padding: 10px 20px 10px;
    border-radius: 10px;
  }

  textarea {
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
      margin-bottom: 20px;
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

const CardItem = (props) => {
  const test = useSelector((state) => state);
  const [show, setShow] = useState(false);
  console.log(test);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const showTodoHandler = () => {
    setShow((prev) => !prev);
  };

  const onAddCard = () => {
    if (value.trim().length === 0) {
      alert("Enter a task before adding !!");
      return;
    }

    dispatch(
      todoActions.addCard({
        task: value,
        id: props.id,
      })
    );
    setValue("");
  };

  return (
    <Container>
      <h4>{props.name}</h4>

      <CardItemList todo={props.todo} />

      {show ? (
        <>
          <div className="InputContainer">
            <textarea
              value={value}
              type="text"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <button className="Button" onClick={onAddCard}>Добавить список</button>
          <button onClick={showTodoHandler} className= 'ButtonX'>X</button>
        </>  
      ) : (
        <div onClick={showTodoHandler} className="Div">
          <p> + Добавьте еще одну кнопку</p>
        </div>
      )}
    </Container>
  );
};
export default CardItem;
