import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AniketShelar22/OnlineProductSellingWebsite/tree/master" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://onlineproductsellingwebsite.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-Commerce Website(SwiftShop)</h3>
              <p> 
              Developed a scalable shopping website using Express.js, MongoDB (Mongoose), and Passport.js with Google OAuth 2.0 for secure authentication. Designed a responsive frontend with EJS, integrated Razorpay for payments, and managed sessions with Express-Session for a personalized user experience. Enhanced customer support by adding a Botsonic AI chatbot with 2500+ custom entries, following Agile methodologies.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Express.js</li> <li>MongoDB</li> <li>HTML/CSS/JS</li> <li>Node.JS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/AniketShelar22/OnlineBookStoreFrontend-Aniket-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://onlinebooksheaven.netlify.app/dashboard/0" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>OnlineBookStore(BooksHaven)</h3>
              <p>
              Developed a web app with an Angular frontend and a Java Spring Boot backend, deploying the frontend on Netlify and the backend on Render. Built REST APIs for core logic and integrated a third-party AI chatbot for instant query resolution. Implemented Customer, Publisher, and Admin modules for user management, transactions, book sales tracking, and content oversight.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Java(Spring Boot)</li>
                <li>MySQL</li>
                <li>Netlify</li>
                <li>Render</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/AniketShelar22/Capx_Portfolio_Frontend" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/AniketShelar22/Capx_Portfolio_Backend" target="\_blank" rel="noreferrer"><title>Backend</title>
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://capx-portfolio-tracker.netlify.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio Tracker Website</h3>
              <p>
                Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}