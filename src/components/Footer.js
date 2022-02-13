import linkedin from "./linked.webp";
import git from "./github.png";

const Footer = () => {
  return (
    <section className="footer">
      Contact
      <br />
      <br />
      <a
        href="https://www.linkedin.com/in/taylor-williams-a0683795/"
        target="_blank"
        alt="linkedin link"
      >
        <img src={linkedin} width="25" alt={linkedin} />
      </a>
      <a
        href="https://github.com/TaylorWill94"
        target="_blank"
        alt="github link"
      >
        <img src={git} width="25" alt={git} />
      </a>
      <br />
      <br />
      <p className="copyright">COPYRIGHT © 2022 TAYLOR WILLIAMS</p>
    </section>
  );
};

export default Footer;
