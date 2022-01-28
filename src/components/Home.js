import git from "./github.png";
import linkedin from "./linkedin.png";
import budgetBae from "./budgetBae.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home-header">Taylor Williams</h1>
      <br />
      <h2 className="home-title">Software Engineer</h2>
      <br />
      <Link id="portfolio-link" to="/projects">
        <button className="portfolio-btn">Portfolio</button>
      </Link>
      <br />
      <br />
      <br />
      <section className="github-icon">
        <button className="github">
          <a href="https://github.com/TaylorWill94">
            <img src={git} width="30" alt="github icon" />
          </a>
        </button>
      </section>
      <section className="linkedin-icon">
        <br />
        <button className="linkedin">
          <img src={linkedin} width="30" alt="linked icon" />
        </button>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Skills</h1>
      <br />
      <article className="skills">
        JavaScript
        <br />
        HTML
        <br />
        CSS
        <br />
        React
      </article>
      <br />
      <br />
      <br />
      <h1>Projects</h1>
      <br />
      <article className="skills">
        <a
          href="https://taylor-budget-app-frontend.netlify.app/"
          alt="budget-bae-website"
        >
          <h2 className="budget-bae-header">Budget Bae</h2>
        </a>
        <br />
        <img
          className="budget-bae-img"
          src={budgetBae}
          width="200"
          alt={budgetBae}
        />
        <br />
        <br />
        <h5>
          Budget Bae is an application that helps you to organize and keep track
          of your finances.
        </h5>
      </article>
    </div>
  );
}

export default Home;