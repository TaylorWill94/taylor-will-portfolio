import star from '../images/star.png';

function About() {
  return (
    <main className="about">
        <h1 className='about-header'>About</h1>
        <br />
        <br />
      <p className='about-blurb'>
        I'm a Software Engineer who is skilled in JavaScript, HTML, CSS, and
        React.
      </p>
      <br />
      <img className='about-img' src={star} width='100' alt={star} />
    </main>
  );
};

export default About;
