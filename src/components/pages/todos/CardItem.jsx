import styled from "styled-components";
import { todoActions } from "../../../store/todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CardItemList from "./CardItemList";

const Container = styled.div`
  margin: 100px;
  background-color: #ebecf0;
  width: 290px;
  
  border-radius: 4px;
  
  .InputContainer {
    padding-top: 15px;
    padding-left: 15px;
  }
  && h4 {
    margin: 8px;
    background-color: yellow;
    align-items: center;
    padding: 7px 7px 7px 15px;
    border-radius: 10px;
  }

  && textarea {
    width: 250px;
    height: 30px;
    outline: none;
    border: gray solid;
    border-radius: 4px;
    ::placeholder {
      padding-left: 5px;
    }
    &&:focus {
      border: 3px solid #0079bf;
    }
  }
`;
const Button = styled.button`
margin: 10px 0px 20px 25px;
  background-color: #0079bf;
  border: none;
  color: #fff;
  height: 25px;
  border-radius: 4px;
  
`;
const P = styled.p`
  background-color: #18d96b;
  margin: 17px;
  padding: 5px;
  width: 230px;
  height: 30px;
  border-radius: 4px;
  box-shadow: 2px 5px 5px 5px #18d98b;
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
          <Button onClick={onAddCard}>Добавить список</Button>
          <Button onClick={showTodoHandler}>X</Button>
        </>
      ) : (
        <div onClick={showTodoHandler}>
          <P> + Добавьте еще одну кнопку</P>
        </div>
      )}
    </Container>
  );
};
export default CardItem;
