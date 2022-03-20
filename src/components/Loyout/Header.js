import icon from "../../assets/icon.png";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { logoutActions } from "../../store/logout"
import { useNavigate } from "react-router-dom";




const Header = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  && div {
    display: flex;
    justify-content: space-around;
  }
  && nav {
    display: flex;
    justify-content: space-around;
  }
  

  && img {
    width: 80px;
  }
  & h1{
    margin-left: 20px ;
  }
  && button {
    width: 100px;
    height: 50px;
    color: black;
    margin-right: 30px;
  }
  && input {
    width: 300px;
    margin-right: 30px;
    color: black;
    border-color: black;
  }
`;
const Headers = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
	const isLogout = useSelector((state) => state.logout.isLogout)
	console.log(isLogout)

	const logoutHandler = (e) => {
		e.preventDefault()
		dispatch(logoutActions.logout())
    return navigate('/Auth')
	}
  

  return (
    <Header>
      
      <div>
        <img src={icon} alt="hear logos picture" />
        <h1>Trello</h1>
      </div>
       <nav>
        <input type="search" placeholder="search something" />
        <button onClick={logoutHandler} >Logout</button>
      </nav>
       
      
    </Header>
  );
};

export default Headers;
