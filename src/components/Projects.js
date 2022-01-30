import budget from "./budget.png";

const Projects = () => {
  return (
    <main className="projects">
      <br />
      <br />
      <h1 className="portfolio-header">Portfolio</h1>
      <br />
      <br />
      <article className="portfolio-sec">
        <a
          href="https://taylor-budget-app-frontend.netlify.app/"
          alt="budget-bae"
        >
          <h2>Budget Bae</h2>
        </a>
        <br />
        <br />
        <img className="portfolio-img" src={budget} width="200" alt={budget} />
        <br />
        <br />
        <br />
        <p>
          Budget Bae allows you to budget and organize your finances in one
          place.
        </p>
        <br />
        <div className="budget-bae-btns">
          <a href='https://taylor-budget-app-frontend.netlify.app/' alt='budget-bae-project' >
        <button className="budget-btns">Live Site</button>
        </a>
        <a href='https://github.com/TaylorWill94/budget-app-frontend' alt='budget-bae-github' >
        <button className="budget-btns">Github</button>
        </a>
        </div>
        <br />
        <p>Technologies</p>
        <br />
        <p className="tech-info">JavaScript</p>
        <p className="tech-info">HTML</p>
        <p className="tech-info">CSS</p>
        <p className="tech-info">Express</p>
      </article>
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default Projects;
