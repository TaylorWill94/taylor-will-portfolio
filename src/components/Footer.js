import linkedin from "./linked.webp";

const Footer = () => {
  return (
    <section className="footer">
      Contact
      <br />
      <br />
      <a
        href="https://www.linkedin.com/in/taylor-williams-a0683795/"
        alt="linkedin link"
      >
        <img src={linkedin} width="25" alt={linkedin} />
      </a>
      <a href="https://github.com/TaylorWill94" alt="github link">
        <p>GitHub</p>
      </a>
      <br />
      <br />
      <p className="copyright">COPYRIGHT © 2022 TAYLOR WILLIAMS</p>
    </section>
  );
};

export default Footer;
