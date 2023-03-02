import React from "react";
import { Container, ActiveButton, Button, Rotate } from "./styledComponent";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";

const GlobalStyle = createGlobalStyle`
body{
  background:${(props) => props.theme.bg};
  color: ${(props) => props.theme.cl};
}
`;

class Changethem extends React.Component {
  state = {
    light: true,
  };

  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
            <h1>Hello World</h1>
        //! Animation css and Rotate 
          <Rotate>
            <img src={logo} alt="logo" />
          </Rotate>
          //! Styled style css js da yozish va nusxa olish qulay ishlatish , styled Componentda
          <Button>Click</Button>
          //! Dark mode and leght mode 
          

          <ActiveButton onClick={() => this.setState({ light: !this.state.light })}>Oq & Qora</ActiveButton>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Changethem;