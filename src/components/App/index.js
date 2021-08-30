import "./style.css"

import TopPanel from "../TopPanel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <TopPanel title="PokerLessons" numberOfLessons={3} currentLesson={0} />
	    <button>Lesson 1</button>
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
