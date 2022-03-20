import styled from "styled-components";
import Modal from "../../../UI/Modalka/Modal";
import { useState } from "react";

const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    margin: 8px;
    background-color: yellowgreen;
    align-items: center;
    padding: 10px 20px 10px;
    border-radius: 10px;
  }
`;

const CardItemList = ({ todo }) => {
  console.log(todo);
  const [showModal, setShowModal] = useState(false);
  const toggleSowHandler = () => setShowModal(true);
 const cancel =()=>{
   setShowModal(null)
 }
  return (
    <>
      {showModal && <Modal onConfirm={toggleSowHandler} cancel={cancel} />}
      <List>
        {todo.map((el) => {
          return (
            <li key={el.id}>
              <p onClick={toggleSowHandler}>{el.task} </p>
            </li>
          );
        })}
      </List>
     
      
    </>
  );
};
export default CardItemList;
