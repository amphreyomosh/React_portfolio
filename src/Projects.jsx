import React from 'react';
import './Projects.css'; // Assuming you have a CSS file for styling
import Footer from './Footer';
import ChatBox from './ChatBox';

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <section className="intro">
        <p>
          Welcome to my projects portfolio! Here, you'll find a selection of the work I've done in web development. Each project showcases my skills in front-end development, including HTML, CSS, JavaScript, React, and more. I am passionate about creating responsive, user-friendly websites that not only look great but also deliver exceptional performance.
        </p>
      </section>

      <section className="project-list">
        <div className="project-item">
          <h2>Project 1: Portfolio Website</h2>
          <img src="path_to_image1.jpg" alt="Portfolio Website" />
          <p>
            This is a personal portfolio website I developed using React. It features a modern design, responsive layout, and includes sections for my work, skills, and contact information.
          </p>
        </div>

        <div className="project-item">
          <h2>Project 2: E-commerce Website</h2>
          <img src="path_to_image2.jpg" alt="E-commerce Website" />
          <p>
            An e-commerce website built with HTML, CSS, and JavaScript. This project includes features such as a product catalog, shopping cart, and checkout system.
          </p>
        </div>

        <div className="project-item">
          <h2>Project 3: Blogging Platform</h2>
          <img src="path_to_image3.jpg" alt="Blogging Platform" />
          <p>
            A blogging platform developed using React and Node.js. The platform allows users to create, edit, and delete blog posts, as well as comment on posts.
          </p>
        </div>
      </section>
      <ChatBox />
      <Footer />
    </div>
  );
}
