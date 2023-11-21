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
          <a
            className="proj-button"
            href="https://protected-taiga-58244-3710fb729053.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Show more
          </a>
        </div>
        <div
          className="card-container"
          href="https://julie0327.github.io/trails_weather/"
        >
          <p>Trails&Weather</p>
          <img
            src=".\src\media\Screenshot 2023-11-20 182210.jpg"
            alt="Api website"
            className="card-img"
          />
          <p>
            How to use OpenWeather API to retrieve weather from several
            different cities in the United States. We use the OpenWeather API to
            retrieve Data from its weather to input what kind of weather
            conditions are going to happen in the next 5 days. This helps the
            users plan their next oncomings days to aviod any weather conditions
            that could effect their plans those next 5 days.
          </p>
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
