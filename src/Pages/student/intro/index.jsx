import React from "react";
import { useNavigate } from "react-router-dom";


import "../../../scss/intro.scss";
import { Images } from "../../../Icons&Images";
import User from "../../../components/User";


const Intro = () => {
  const navigate = useNavigate();

  return (
    <main className="intro column-flex">
      <section>
        <h1>Hello Tomiwa!</h1>
        <p>
          Welcome to Techstudio. Thanks for choosing this platform, we are here
          to guide you through every step of your tech journey.
        </p>
        <h5>Tools you need to download to get started on this course</h5>
        <div>
          <p>
            -Adobe XD <span>adobe.com/products/xd</span>
          </p>
          <p>
            -Figma <span>adobe.com/products/xd</span>
          </p>
          <p>
            -Figma <span>adobe.com/products/xd</span>
          </p>
        </div>

        <h6>
          After setting it up, click on ‘get started’ to begin your training.
        </h6>
        <button onClick={() => navigate('/student/dashboard')}>Get started</button>
        <article>
          <img src={Images.intro} alt="intro" />
        </article>
      </section>
      <div>
        <User />
      </div>
    </main>
  );
};

export default Intro;
