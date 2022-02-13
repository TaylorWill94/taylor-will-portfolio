import star from "../images/star.png";

function About() {
  return (
    <main className="about">
      <br />
      <br />
      <h1 className="about-header">About</h1>
      <br />
      <br />
      <img className="about-img" src={star} width="200" alt={star} />
      <br />
      <br />
      <br />
      <p className="about-blurb">
        I am a Full Stack Software Engineer with a background in retail, project
        management and digital marketing. I am most familiar with the PERN stack
        and thoroughly enjoy the frontend. I am passionate about creating
        user-friendly applications that aim to solve a problem. A few of my
        hobbies include trying new restaurants throughout the city and creating
        custom website templates. I'm currently looking for a junior developer
        role where I can grow and learn with an amazing company!
      </p>
      <br />
      <section className="about-skills">
        <br />
        <p>JavaScript</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>React</p>
        <p>PostgresSQL</p>
        <p>Express</p>
        <br />
      </section>
      <br />
      <br />
    </main>
  );
}

export default About;
