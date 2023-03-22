import "./index.css";
import "animate.css";
import Sudheer from "./assets/about.jpg";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Lists from "./Lists";
const educationalData = [
  {
    degree: "Bachelor's of technology",
    course: "Civil engineering",
    institute: "n.b.k.r institute of science & technology",
    year: "2019-2022",
  },
  {
    degree: "Diploma",
    course: "Civil engineering",
    institute: "Sri venkateswara govt polytechnic, tirupathi",
    year: "2016-2019",
  },
];
function Home() {
  const [email, setEmail] = useState("");
  const [tips, setTips] = useState("");
  const url = `https://mail.google.com/mail/u/0/?ogbl#inbox?compose=${email}`;
  const sendEmail = () => {
    if (email && tips) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/text",
        },
        body: JSON.stringify(tips),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    setEmail("");
    setTips("");
  };
  return (
    <div className="home">
      <nav>
        <h1>
          <a href="#" className="nav-head">
            sudheer
          </a>
        </h1>
        <ul>
          <li>
            <h4>
              <a href="#about">About</a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="#">Projects</a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="#connect">Connect</a>
            </h4>
          </li>
        </ul>
      </nav>

      <main>
        <h1>SUDHEER KUMAR</h1>
        <p>
          A self taught web programmer, learning to craft website with java and
          React.Js
        </p>
      </main>

      <section id="about">
        <h1>about me</h1>
        <p>Get to know me before you dive into my content</p>
        <img src={Sudheer} alt="Sudheer Kumar P" />
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sudheer-kumar-p-a49973158/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Sudheer0357" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/sudheer_chinna0357/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:sudheerkumarp0357@gmail.com" target="_blank">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p className="about-me">
          As a non-IT student who becoming a web developer, I am constantly
          exploring new technologies to enhance my skills. Currently, I am
          focusing on learning React for MERN stack web development. Despite not
          having a formal background in computer science, I have found a passion
          for coding and am eager to expand my knowledge and expertise. Through
          hard work and determination, I am determined to become a proficient
          MERN stack developer and make a positive impact in the tech industry.
        </p>
      </section>
      <article>
        <h1>educational background</h1>
        <ul>
          {educationalData.map((data) => {
            return <Lists key={data.year} data={data} />;
          })}
        </ul>
      </article>
      <footer id="connect">
        <label htmlFor="form">Always Open for suggestions</label>
        <form className="form">
          <input
            type="email"
            placeholder="email...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter a suggestion"
            value={tips}
            onChange={(e) => setTips(e.target.value)}
          />
          <input type="button" value="send" onClick={sendEmail} />
        </form>
        <h1>thanks for being here</h1>
      </footer>
    </div>
  );
}

export default Home;
