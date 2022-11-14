import React from "react";
import Illustration from "../../components/Illustration";
import Hero from "./Hero";
import Banner from "../../components/banners/Banner";
import Profile from "../../components/Profile";
import Button from "../../components/buttons/Button";
import BannerII from "../../components/banners/BannerII";

const Home = () => {
  const imgStyle = {
    position: `absolute`,
    top: `5rem`,
    left: 0,
    zIndex: -1,
  };
  return (
    <main>
      <main className="bg-blue mt-20">
        <Hero />
      </main>

      <main className="position-relative mt-20 mt-lg-16">
        <article className="container px-10">
          <img
            className="d-none d-lg-block section_2_bg_img"
            style={imgStyle}
            alt="img"
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Mask_Group_91_sm51se.png"
          />
          <h2 className="text-dark fs-3xl text-center text-lg-start f-s-32 f-w-800">
            Why choose Techstudio?
          </h2>
          <article className="d-flex justify-content-end">
            <div className="row justify-content-between align-items-center gap-5 mt-5 section-2">
              <div className="col-12 col-lg-5 text-center text-lg-start">
                <Illustration
                  size={`100%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476071/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_10032_rlfitf.png`}
                  title={`Always welcoming`}
                  desc={`Our platform allows easy onboarding to any
           of our programs you wish to be part of.`}
                />
              </div>
              <div className="col-12 col-lg-5 text-center text-lg-start">
                <Illustration
                  size={`100%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476072/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_10034_fnf9zs.png`}
                  title={`Online and Offline Classes`}
                  desc={`Our platform provides a comfortable and seamless Online and offline class experience`}
                />
              </div>
              <div className="col-12 col-lg-12 mt-10 text-center text-lg-start">
                <Illustration
                  // size={`90%`}
                  img={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476095/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Black_Businessman-6_yx32kj.png`}
                  title={`There when you need us`}
                  desc={`Our dedicated team of tech experts research and, compile knowledge across sectors in tech to give you the best resources needed.`}
                />
              </div>
            </div>
          </article>
        </article>
      </main>

      <main className="container mt-60 mb-52">
        <Banner>
          <div className="text-white text-center d-flex flex-column align-items-lg-center gap-10 p-20">
            <p className="text-start text-lg-center lh-lg f-s-16">
              I have been trying to figure out a way to kickstart my career in
              tech to no avail. I <br /> tried self tutorial, still nothing.
              When I tried techstudio 10 weeks training, my story <br /> changed
              for better
            </p>
            <Profile />
          </div>
        </Banner>
      </main>

      <main className="container d-flex mb-20">
        <article className="d-none d-lg-block">
          <div style={{ width: `40rem` }} className="image-typing-hands">
            <img
              className="image-one"
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476117/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/person-using-macbook-air-1181555_oo5fry.png"
              alt="img"
            />
            <img
              className="image-two"
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7474_d48bdj.png"
              alt="blue"
            />
            <img
              className="image-three"
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476060/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Subtraction_3_pmoyw5.png"
              alt="border"
            />
          </div>
        </article>
        <article className="mt-14">
          <h4 className="text-info fs-lg m-b-16">TAKE A COURSE</h4>
          <h1 className="text-dark fw-bolder home-color-2 mt-4 mb-6">
            Learn a skill to elevate <br /> your earning potential
          </h1>
          <p
            className="m-b-65 m-t-20 text-cyan f-s-16 home-letter-spacing mb-16"
            style={{ opacity: 0.85 }}
          >
            Our Accelerator program is designed to connect the most <br />{" "}
            ambitious university graduates with long-term employment and <br />{" "}
            help you launch your career in the tech space.
          </p>
          <Button
            name={`KNOW US MORE`}
            type={`btn btn-primary px-5`}
            height={`48px`}
          />
        </article>
      </main>

      <main className="container px-10">
        <article className="row flex-column-reverse flex-lg-row mb-52">
          <article
            className="d-flex align-items-start gap-10 mt-10 col-12 col-lg-6"
            style={{ height: `40rem` }}
          >
            <div>
              <img
                className="h-75 d-none d-lg-block"
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476074/samples/techstudio/Icons%20and%20Images/Tech%20Studio%20images/Group_2535625_kxnc8c.png"
                alt="bullet"
              />
            </div>
            <div className="d-flex flex-column justify-content-between gap-20">
              <div>
                <h3 className="fs-2xl mb-5 text-dark f-w-800 f-s-24">Apply</h3>
                <p
                  className="mb-0 text-cyan f-s-16"
                  style={{ letterSpacing: 0 }}
                >
                  Apply for any of our learning tracks. Techstudio offers
                  diverse <br /> range of learning courses designed to give you
                  the skills needed <br /> to grow professionally.
                </p>
              </div>
              <div className="my-1 m-b-25">
                <h3 className="fs-2xl mb-5 text-dark f-w-800 f-s-24">
                  Get Admitted
                </h3>
                <p
                  className="mb-0 text-cyan f-s-16"
                  style={{ letterSpacing: 0 }}
                >
                  Receive an admission offer and reserve your spot in the
                  program. <br /> You will complete the required KYC procedures
                </p>
              </div>
              <div>
                <h3 className="fs-2xl mb-5 text-dark f-w-800 f-s-24">
                  Start classes
                </h3>
                <p
                  className="mb-0 text-cyan f-s-16"
                  style={{ letterSpacing: 0 }}
                >
                  Attend your first class, partake in group projects, and 1:1{" "}
                  <br />
                  sessions. Our team will keep an eye on your growth even <br />
                  after the training
                </p>
              </div>
            </div>
          </article>
          <article className="col-12 col-lg-6">
            <img
              className="w-100"
              // style={{ transform: `translateX(3rem)` }}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476110/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Mask_Group_90_ckq8no.png"
              alt="img"
            />
          </article>
        </article>
      </main>

      <main className="container mx-auto my-52 p-0 px-lg-10">
        <BannerII>
          <div className="ms-12 ms-lg-40 text-white py-20">
            <span>Try TechStudio</span>
            <h3 className="mt-7 fw-bolder">Get started with Techstudio</h3>
            <Button
              type={`btn btn-primary px-16`}
              name={`Get Started`}
              height={`40px`}
            />
          </div>
        </BannerII>
      </main>
    </main>
  );
};

export default Home;
