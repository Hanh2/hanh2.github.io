import "./style.css"

function TopPanel() {
  return (
    <div className="TopPanel"> 
      <h1 className="Title">PokerLessons</h1>
      <NavBar nbrOfLessons={3} currentLesson={0} />
    </div>
  );
}

function NavBar(props) {
  // lessonNumbers = [1, 2, ..., props.nbrOfLessons];
  const lessonNumbers = listOfNumbers(1, props.nbrOfLessons + 1); 
  const currentLesson = props.currentLesson;
  const lessonButtons = lessonNumbers.map((number) =>
    <li key={number.toString()}>
      <LessonButton lesson={number} currentLesson={currentLesson} />
    </li>
  );
  
  return (
    <ul className="NavBar">
      <li key="0"><HomeButton /></li>
      {lessonButtons}
    </ul>
  );
}

// returns [start, start + 1, ..., end - 1]
function listOfNumbers(start, end) {
  return [...Array(end - start).keys()].map(x => x + start);
}

function HomeButton(props) {
  const classString = props.currentLesson === 0 ? "active" : "inactive";

  return (
    <a class={classString}>Home</a>
  );
}

function LessonButton(props) {
  const lesson = props.lesson;
  const currentLesson = props.currentLesson;
  const classString = lesson === currentLesson ? "active" : "inactive";
  
  return <a class={classString}>{lesson}</a>;
}

export default TopPanel;
