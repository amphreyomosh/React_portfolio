import React from "react";
import "./About.css"; // Add a CSS file for styling
import Footer from "./Footer";
import ChatBox from "./ChatBox";

export default function About() {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <p>
          Hi, I'm Humphrey Omondi, a passionate and innovative front-end
          developer with a strong background in web design and development. With
          a keen eye for detail and a love for creating beautiful, functional
          websites, I specialize in crafting responsive and dynamic web
          applications that deliver outstanding user experiences.
        </p>
        <p>
          My expertise includes HTML, CSS, JavaScript, and React, among other
          front-end technologies. I have a deep understanding of modern web
          design principles, user experience, and performance optimization. I am
          also proficient in graphic design, which allows me to create visually
          appealing and user-friendly interfaces.
        </p>
        <p>
          I'm dedicated to continuous learning and staying up-to-date with the
          latest industry trends and technologies. My goal is to turn your ideas
          into reality by creating websites that not only look great but also
          function seamlessly across all devices.
        </p>

        <h2>My Skills</h2>
        <div className="skills-gallery">
          <div className="skill-item">
            <img src="./public/HTML_image.jpeg" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <img src="path_to_css_image.jpg" alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill-item">
            <img src="path_to_javascript_image.jpg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src="path_to_react_image.jpg" alt="React" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src="path_to_graphic_design_image.jpg" alt="Graphic Design" />
            <p>Graphic Design</p>
          </div>
          {/* Add more skills as needed */}
        </div>

        <h2>Experience</h2>
        <p>
          Over the past two years, I've worked on various projects that have
          honed my skills and expertise. I've built websites for clients from
          different industries, helping them establish a strong online presence.
          My experience ranges from developing custom WordPress themes to
          building fully responsive web applications using React and other
          modern JavaScript frameworks.
        </p>
        <p>
          As a front-end developer, I'm proficient in collaborating with
          back-end developers and designers to create seamless, integrated
          solutions. I understand the importance of clean, maintainable code and
          am always eager to explore new tools and methodologies that can
          improve my workflow and the quality of my work.
        </p>

        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities and collaborations. Whether
          you're looking to start a new project, need help with a redesign, or
          just want to chat about the latest in web development, feel free to
          reach out. Let's create something amazing together!
        </p>
        <ChatBox />
      </div>
      <Footer />
    </>
  );
}
