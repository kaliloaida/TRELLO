import Headers from "../Loyout/Header";
import Addtodo from "./todos/Addtodo";
import Todos from "./todos/Todos";
import styled from "styled-components";


const Main = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Headers />
      <Main>
        <Todos />
        <Addtodo />
      </Main>
    </>
  );
};

export default Home;
