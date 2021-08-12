import "./App.css"

import {TopPanel} from "./Components.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<TopPanel></TopPanel>
	<button>
	  Lesson 1
        </button>
	<br/>
	<br/>
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
