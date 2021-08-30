import "./style.css"

import NavBar from "../NavBar"

function TopPanel(props) {
  return (
    <div className="TopPanel"> 
      <h1 className="Title">{props.title}</h1>
      <NavBar numberOfLessons={props.numberOfLessons} />
    </div>
  );
}

export default TopPanel;
