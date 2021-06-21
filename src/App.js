import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To je čist hud app.</p>
        <a
          className="App-link"
          href="https://matejmeglic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for awesomeness!!!
        </a>
      </header>
    </div>
  );
}

export default App;
