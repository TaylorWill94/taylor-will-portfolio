import star from "../images/star.png";

function About() {
  return (
    <main className="about">
      <br />
      <br />
      <h1 className="about-header">About</h1>
      <br />
      <br />
      <p className="about-blurb">
        I am a Full Stack Software Engineer with a strong adoration for
        for fashion and food. I enjoy trying new restaurants throughout the
        city. I am passionate about creating user-friendly applications that aim
        to solve a problem! I'm currently looking for a software engineer role where I
        can make a difference in the tech industry!
      </p>
      <br />
      <br />
      <img className="about-img" src={star} width="200" alt={star} />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default About;
