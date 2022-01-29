import budget from './budgetBae.png';

const Projects = () => {
  return (
    <main className="projects">
      <br />
      <br />
      <h1 className='portfolio-header'>Portfolio</h1>
      <br />
      <br />
      <article className='portfolio-sec'>
          <a href='https://taylor-budget-app-frontend.netlify.app/' alt='budget-bae'>
          <h2>Budget Bae</h2>
          </a>
          <br />
          <br />
        <img className='portfolio-img' src={budget} width='200' alt={budget} />
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
