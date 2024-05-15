// partnership.jsx
import React from "react";
import "./partnership.css";
import partnership from "../../components/assets/images/partnership3.gif";
import target from "../../components/assets/images/target.png";
import growth from "../../components/assets/images/growth.png";
import skilled from "../../components/assets/images/talent-search.png";
import community from "../../components/assets/images/community.png";

const Partnership = () => {
  return (
    <div className="partnership-container">
      <div className="container">
        <div className="left-section">
          <h2>Business <span>Partnership</span></h2>
          <p>
          Are you ready to take your business to the next level? Partner with SimplByte
    and unlock new opportunities for growth and success. Our tailored partnership
    programs are designed to elevate your brand, expand your reach, and maximize
    your potential in the digital world.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="right-section">
          <img src={partnership} alt="Partnership Image" />
        </div>
      </div>
      <div className="offer-section">
        <h2>What We Offer in Partnership</h2>
        <div className="cards-container">
          <div className="card">
            <div class="first-content">
            <div><img src={target} alt="Target Image" /></div>
              
              <span>Target Audience</span>
              </div>
         
            <div class="second-content">
            
              <span>Gain access to our extensive network and target audience, providing opportunities to showcase your products and services to a relevant and engaged demographic.</span>
            </div>
          </div>
          <div className="card">
            <div class="first-content">
            <div><img src={growth} alt="Target Image" /></div>
              <span>Growing Platform</span>
            </div>
            <div class="second-content">
              <span> Partnering with SimplByte means exposure on a rapidly growing platform, amplifying your brand visibility and positioning you for increased recognition and market penetration.</span>
            </div>
          </div>
          <div className="card">

            <div class="first-content">
            <div><img src={skilled}alt="Target Image" /></div>
              <span>Skilled Interns</span>
            </div>
            <div class="second-content">
              <span> Access a pool of talented and skilled interns through our program, providing valuable resources to support your projects and initiatives, fostering innovation and growth within your organization.</span>
            </div>
          </div>
          <div className="card">
            <div class="first-content">
            <div><img src={community} alt="Target Image" /></div>
              <span>Community display</span>
            </div>
            <div class="second-content">
              <span>Showcase your commitment to community engagement and corporate social responsibility by participating in our community-focused initiatives and events, fostering meaningful connections and making a positive impact together.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
