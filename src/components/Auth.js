import styled from "styled-components";
import icon from "../assets/icon.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Main = styled.form`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  & div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    justify-content: center;
  }
  .block div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .block {
    display: flex;
    flex-direction: column;
  }
  & img {
    width: 110px;

    margin-bottom: 20px;
  }
  & h1 {
    padding-left: 20px;
    font-size: 50px;
  }
  & label {
    display: block;
    color: black;
    font-size: 30px;
    font-family: "Arial Narrow Bold", sans-serif;
    margin-bottom: 1rem;
  }
  & input {
    margin-bottom: 2rem;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.6rem;
    border: 1px solid #ccc;
  }
  & button {
    margin-bottom: 0.25rem;
    width: 20rem;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    margin: auto;
    border-radius: 4px;
    padding: 0.6rem;
    border: 1px solid #ccc;
    color: white;
    background-color: green;
  }
`;

const Auth = () => {
  
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // let formIsValid = false;

  // formIsValid = value && password;

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    {
      state.map((user) => {
        if (user.email === value && user.password === password) {
          return navigate("/Home");
        } else {
          setError("Неправильный логин или пароль");
        }
      });
    }

    // if (value.includes("@") && password.trim().length > 6) {
    //   setValue("");

    //   setPassword("");
    //   alert("Enter something before Login !!");
    //   return;
    // }

    // return navigate("/Home");
  };

  return (
    <>
    
      <Main onSubmit={loginSubmitHandler}>
        <div>
          <img src={icon} alt="hear logos picture" /> <br />
          <h1>Trello</h1>
        </div>

        <div className="block">
          <div>
            <label htmlFor="email">Вход в Trello</label>
            <p>{error}</p>
            <input
              type="email"
              value={value}
              id="email"
              onChange={(event) => setValue(event.target.value)}
              placeholder="Укажите адрес электронной почты"
            />
            
            <br /> <br />
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </Main>
      
    </>
  );
};
export default Auth;

