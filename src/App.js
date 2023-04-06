import logo from './logo.svg';
import './App.css';
import JumoButton from "./components/JumoButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JumoButton backgroundColor="blue" fontColor="white">
          테스트 버튼
        </JumoButton>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
