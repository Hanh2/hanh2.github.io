import "./style.css"

import HomeLink from "../HomeLink"
import LessonLink from "../LessonLink"

function NavBar(props) {
  // lessonNumbers = [1, 2, ..., props.nbrOfLessons];
  const lessonNumbers = listOfNumbers(1, props.numberOfLessons + 1); 
  const lessonLinks = lessonNumbers.map((number) =>
    <li key={number.toString()}>
      <LessonLink lessonNumber={number} />
    </li>
  );
  
  return (
    <ul className="NavBar">
      <li key="0"><HomeLink /></li>
      {lessonLinks}
    </ul>
  );
}

// returns [start, start + 1, ..., end - 1]
function listOfNumbers(start, end) {
  return [...Array(end - start).keys()].map(x => x + start);
}

export default NavBar;
