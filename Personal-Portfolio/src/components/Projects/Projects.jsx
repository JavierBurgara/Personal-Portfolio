import "./Projects.css";

export function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="cards-container">
        <div className="card-container">
          <p>Calendar Api</p>
          <img
            src=".\src\media\Screenshot 2023-11-20 011411.jpg"
            alt="Api website"
            className="card-img"
          />
          <p>
            Using a Calendar API involves integrating a calendar service into
            your application or system, allowing you to manipulate and interact
            with calendar data programmatically. This API provides a set of
            endpoints and methods that enable developers to perform various
            operations such as creating events, retrieving event details,
            updating event information, and managing calendars.
          </p>
          <a className="proj-button" href="https://protected-taiga-58244-3710fb729053.herokuapp.com/" target="_blank" rel="noreferrer">Show more</a>
        </div>
        <div className="card-container">
          <p>Card Title</p>
          <p>Card Picture</p>
          <p>Card Description</p>
          <a className="proj-button">Show more</a>
        </div>
        <div className="card-container">
          <p>Card Title</p>
          <p>Card Picture</p>
          <p>Card Description</p>
          <a className="proj-button">Show more</a>
        </div>
      </div>
    </div>
  );
}
