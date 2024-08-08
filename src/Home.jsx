import "./Home.css";
import ChatBox from "./ChatBox"; // Corrected import statement
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="intro" id="name">
          <h1>Humphrey Omondi</h1>
          <h1>Web Developer</h1>
          <p>
            I'm a passionate and versatile Web Developer & Designer with a keen
            eye for detail and a love for crafting beautiful, functional
            websites. With expertise in front-end technologies like HTML, CSS,
            JavaScript, and React, I create responsive and dynamic web
            applications that engage users and drive results.
          </p>
        </section>
        <section className="services">
          <div className="service-list">
            <div className="service-item">
              <img
                src="./public/HTML_image.jpeg"
                id="imageOne"
                alt="Web Development"
              />
              <p>
                Building modern, responsive websites using the latest web
                technologies. I specialize in front-end development with a focus
                on user experience and performance.
              </p>
            </div>
            <div className="service-item">
              <img
                src="./public/HTML_image.jpeg"
                id="imageTwo"
                alt="Graphic Design"
              />
              <p>
                Crafting visually stunning designs that capture attention and
                communicate effectively. I have experience with tools like Adobe
                Photoshop, Canva, and Figma.
              </p>
            </div>
            <div className="service-item">
              <img
                src="./public/HTML_image.jpeg"
                id="imageThree"
                alt="WordPress Development"
              />
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
        <section className="social-icons">
          <div className="icons">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </section>
        <ChatBox /> {/* Chatbox Component */}
      </div>
      <Footer />
    </>
  );
}
