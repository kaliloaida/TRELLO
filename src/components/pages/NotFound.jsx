import styled from "styled-components"

const Container= styled.div`
background-image:url('https://img.freepik.com/free-vector/404-error-web-template-with-chemical-flat-style_23-2147802177.jpg');
background-repeat:no-repeat;
  height:700px;
  position:relative;
  left: 25%;
  align-items: center;
`
const NotFound = () => {
    return (
        <Container>
            {/* <p>Page not Found!</p> */}
        </Container>
    )
}

export default NotFound