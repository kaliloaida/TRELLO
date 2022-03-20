import cardbanner from "../../assets/cardbanner.png";
import menu from "../../assets/menu.png";
import record from "../../assets/record.png";
import gmail from "../../assets/gmail.png";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Container = styled.div`
  background-color: rgb(110, 131, 131);
  box-shadow: 0 2px 8px black;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 50%;
  z-index: 100;
  overflow: hidden;
  .first {
    display: flex;
    justify-content: space-between;
    /* margin-top: 10px; */
  }
  .first-line {
    display: flex;
    margin-left: 10px;
    margin-top: 20px;
  }

  & p {
    margin-left: 70px;
  }
  .deletetext {
    margin-left: 10px;
    margin-top: 20px;
    margin-right: 20px;
    width: 50px;
    font-size: 50px;
    font-family: "Times New Roman", Times, serif;
    border-radius: 10px;
  }
  .second {
    display: flex;

    margin-left: 13px;
    margin-top: 5px;
  }
  .second-line {
    margin-right: 150px;
    margin-left: 30px;
  }
  .second-line > span {
    font-weight: 400;
    background-color: gray;
  }
  .third {
    display: flex;

    margin-top: 30px;
  }
  .third > img {
    margin-left: 10px;
  }
  .third > h3 {
    margin-left: 20px;
  }
  .third > span {
    margin-left: 200px;
    padding-top: 20px;
    padding-left: 30px;
    background-color: grey;
    width: 400px;
  }
  .last {
    display: flex;
  }
  .mail {
    margin: 20px 20px 20px;
    width: 50px;
  }
  .comment {
    margin: 20px 30px 20px;
    width: 300px;
  }
`;
const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <BackdropModal>
          <Container className="backdrop" onClick={props.cancel}>
            <div className="first">
              <div className="first-line">
                <img src={cardbanner} alt="" />
                <h4>Действия со списком</h4>
              </div>
              <button onClick={props.cancel} className="deletetext">
                X
              </button>
            </div>
            <p>В колонке</p>
            <div className="second">
              <img src={menu} alt="" />
              <div className="second-line">
                <h3>Описание</h3>
                <span>Добавить боллее подробное описание</span>
              </div>
            </div>
            <div>
              <div className="third">
                <img src={record} alt="" />
                <h3>Действия</h3>
                <span>Показать подробности</span>
              </div>
              <div className="last">
                <img src={gmail} alt="" className="mail" />
                <input placeholder="Напишите комментарий" className="comment" />
              </div>
            </div>
          </Container>
        </BackdropModal>,

        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
