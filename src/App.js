import logo from "./logo.svg";
import "./App.css";

//import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming Soon</p>
        <a
          className="App-link"
          href="https://blog.railgun.codes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          railgun.codes
        </a>
      </header>
    </div>
  );
}

export default App;
