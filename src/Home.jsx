import "./Home.css";
import ChatBox from "./ChatBox"; // Corrected import statement
import Footer from './Footer'; 

export default function Home() {
  return (
    <>
      <div className="home" >
        <section className="intro" id="name">
          <h1>Welcome to Humphrey Omondi's Portfolio</h1>
          <p>
            I'm a passionate and versatile Web Developer & Designer with a keen
            eye for detail and a love for crafting beautiful, functional
            websites. With expertise in front-end technologies like HTML, CSS,
            JavaScript, and React, I create responsive and dynamic web
            applications that engage users and drive results.
          </p>
        </section>
        <section className="services">
          <h2>What I Offer</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>Web Development</h3>
              <img src="path_to_image1.jpg" alt="Web Development" />
              <p>
                Building modern, responsive websites using the latest web
                technologies. I specialize in front-end development with a focus
                on user experience and performance.
              </p>
            </div>
            <div className="service-item">
              <h3>Graphic Design</h3>
              <img src="path_to_image2.jpg" alt="Graphic Design" />
              <p>
                Crafting visually stunning designs that capture attention and
                communicate effectively. I have experience with tools like Adobe
                Photoshop, Canva, and Figma.
              </p>
            </div>
            <div className="service-item">
              <h3>WordPress Development</h3>
              <img src="path_to_image3.jpg" alt="WordPress Development" />
              <p>
                Designing and developing custom WordPress websites that are easy
                to manage and update. From theme customization to plugin
                development, I cover it all.
              </p>
            </div>
          </div>
        </section>
        <section className="call-to-action">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's collaborate to turn your ideas into reality. Whether you're
            looking for a new website, a redesign, or a stunning graphic, I'm
            here to help.
          </p>
          <button onClick={() => (window.location.href = "/contact")}>
            Get in Touch
          </button>
        </section>
        <ChatBox /> {/* Chatbox Component */}
      
      </div>
      <Footer />
    </>
    
  );
}
