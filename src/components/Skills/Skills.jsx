import "./Skills.css";

export function Skills() {
  return (
    <div className="skill-container" id="skills">
      <h1 className="h1-skills">Skills</h1>
      <div className="skill-lists">
        <ul>
          <p className="skills-list-header">Frontend</p>
          <li>React.js</li>
          <li>Redux</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Material-UI</li>
        </ul>

        <ul>
          <p className="skills-list-header">Backend</p>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API Development</li>
          <li>Object-Relational Mapping</li>
          <li>MVC (Model-View-Controller)</li>
          <li>Third-Party APIs</li>
          <li>Object-Oriented Programming(OOP)</li>
          <li>Server-Side APIs</li>
          <li>Web APIs</li>
          <li>MongoDB</li>
          <li>MYSQL</li>
          <li>NOSQL</li>
        </ul>

        <ul>
          <p className="skills-list-header">Miscellaneous Tools</p>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLabs</li>
        </ul>
      </div>
    </div>
  );
}
