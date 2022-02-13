import git from "./github.png";
import linkedin from "./linked.webp";
import budget from "./budget.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <br />
      <br />
      <br />
      <br />
      <h1 className="home-header">Taylor Williams</h1>
      <br />
      <h3 className="home-title">Full Stack Engineer</h3>
      <br />
      <div className="portfolio-sec-btn">
        <Link id="portfolio-link" to="/projects">
          <button className="portfolio-btn">Portfolio</button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <section className="github-icon">
        <button className="github">
          <a
            href="https://github.com/TaylorWill94"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github-icon-img"
              src={git}
              width="30"
              alt="github icon"
            />
          </a>
        </button>
      </section>
      <section className="linkedin-icon">
        <br />
        <button className="linkedin">
          <a
            href="https://www.linkedin.com/in/taylor-williams-a0683795/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} width="30" alt="linked icon" />
          </a>
        </button>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <br />
        <br />
        <br />
        <h1 className="skills-header">Skills</h1>
        <br />
        <article className="skills">
          JavaScript
          <br />
          HTML
          <br />
          CSS
          <br />
          React
          <br />
          PostgresSQL
          <br />
          Express
          <br />
          Node.js
        </article>
        <br />
        <br />
        <br />
        <h1 className="project-header">Projects</h1>
        <br />
        <article className="skills">
          <a
            href="https://taylor-budget-app-frontend.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="budget-bae-website"
          >
            <a
              href="https://taylor-budget-app-frontend.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="budget-bae"
            >
              <h2 className="budget-bae-header">Budget Bae</h2>
            </a>
          </a>
          <br />
          <a
            href="https://taylor-budget-app-frontend.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="budget-bae"
          >
            <img
              className="budget-bae-img"
              src={budget}
              width="200"
              alt={budget}
            />
          </a>
          <br />
          <br />
          <br />
          <h5>
            Budget Bae is an application that helps you to organize and keep
            track of your finances.
          </h5>
        </article>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
