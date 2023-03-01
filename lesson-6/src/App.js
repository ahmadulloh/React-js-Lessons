import logo from "./logo.svg";
import { Container, HelloWorld } from "./statesStyle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <HelloWorld>Styled components</HelloWorld>
        </Container>
      </header>
    </div>
  );
}

export default App;
