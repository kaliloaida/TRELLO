import { useSelector } from "react-redux";
import styled from "styled-components"
import CardItem from "./CardItem";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Todos = () => {
  const todos = useSelector((state) => {
    return state.todo.todo;
  });
  console.log(todos);

  return (
    <>
      <Div className="tasks-list">
        {todos.map((el) => (
          <CardItem key={el.id} name={el.name} todo={el.todo} id={el.id} />
        ))}
      </Div>
    </>
  );
};
export default Todos;
