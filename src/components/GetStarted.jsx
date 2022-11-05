import React from "react";

import { Images } from "../Icons&Images";


const GetStarted = () => {
  return (
    <section className="getStarted">
      <div>
        <img src={Images.repeatGridLight} alt="repeat grid" />
      </div>
      <article>
        <p>Try TechStudio</p>
        <h5>Get started with Techstudio</h5>
        <button>Get Started</button>
      </article>
      <article>
        <div>
          <img src={Images.aboutSmile} alt="about smile" />
        </div>
      </article>
      <div>
        <img src={Images.aboutRectangle} alt="rec" />
      </div>
    </section>
  );
};

export default GetStarted;
