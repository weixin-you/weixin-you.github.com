import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';
import background from "../images/caring.jpg";

const About = () => {
  return (
    <div className="about-us">
      <Header />
      <div className="about-content">
        <div className="section-container">
          <div>
            <h2>About Us</h2>
            <div className="description">
              <p>
                The Hindu Society of Ottawa‐Carleton is run by a group of volunteers, some working full time and some retired, who volunteer their time for the benefit of the community. Our uniqueness is that there is minimal administrative overhead charged to the donors. Most of the overhead is picked up by members of the Executive Committee through their own contributions so, your entire donation is disbursed to the beneficiaries for whom it is meant.
                <br></br> <br></br>
                We carry out charitable activities outside Canada in partnership with carefully screened partners using Project Concept.
              </p>
            </div>
          </div>
          <div class="image-container">
            <div className="image">
              <img src={background} alt="About Us" />
              <div class="image-overlay"></div>
            </div>
          </div>
        </div>
        <br />
        <div class="container">
          <div class="committee">
            <h2>Our Executive Committee</h2>
            <ul>
              <li>Mrs. Mythili Kalyanasundaram <br></br> President <br></br> 613‐599‐0690</li>
              <li>Mr. Rajan Ramanajum <br></br> Vice President <br></br> 613-739-0823</li>
              <li>Dr. Ramalingom Thavasinadar <br></br> Secretary <br></br> 613‐805-1040</li>
              <li>Mrs. Radha Sankaran <br></br> Joint Secretary <br></br> 613-837-5937</li>
              <li>Mr. Kulothungan Sachithanantham <br></br> Treasurer <br></br> 613-415-4438</li>
              <li>Mr. Vas Dev Aggarwal <br></br> 613‐727‐1033</li>
              <li>Mr. Panchanadam Athmaraman <br></br> 613-823-1527</li>
              <li>Dr. Ravinder Jain <br></br> 613-864-9384</li>
              <li>Dr. Thangam Parameswaran <br></br> 613-824-5335</li>
            </ul>
          </div>
          <div class="council">
            <h2>Advisory Council</h2>
            <ul>
              <li>Mr. Mukesh Gupta <br></br> 647-462-6070</li>
              <li>Kavita Jain <br></br> 613-224-9384</li>
              <li>Dr. Mini Khurana <br></br> 306‐446‐2207 (SK)</li>
              <li>Nisha Mapara</li>
              <li>Satish Mallya</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
