import React, { useState } from "react";
import { motion } from "framer-motion";

import "../../../scss/classDetail.scss";
import User from "../../../components/User";
import { Icons, Images } from "../../../Icons&Images";
import AssignmentModal from "../../../components/AssignmentModal";

const ClassDetail = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showDiscussions, setShowDiscussions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [toggleAssignment, setToggleAssignment] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowDiscussions(false);
    setShowResources(false);
  };

  const handleShowDiscussions = () => {
    setShowDiscussions(true);
    setShowAbout(false);
    setShowResources(false);
  };

  const handleShowResources = () => {
    setShowResources(true);
    setShowAbout(false);
    setShowDiscussions(false);
  };

  const RelatedVideos = [
    {
      title: "Theory of User Experience",
      teacher: "Oluwaseyi Sola",
      icon: Icons.clock2,
      time: "10mins",
    },
    {
      title: "Theory of User Experience",
      teacher: "Oluwaseyi Sola",
      icon: Icons.clock2,
      time: "10mins",
    },
    {
      title: "Theory of User Experience",
      teacher: "Oluwaseyi Sola",
      icon: Icons.clock2,
      time: "10mins",
    },
    {
      title: "Theory of User Experience",
      teacher: "Oluwaseyi Sola",
      icon: Icons.clock2,
      time: "10mins",
    },
  ];

  const resources = [
    {
      icon: Icons.pdf,
      title: "Design and Insights.pdf",
    },
    {
      icon: Icons.pdf,
      title: "Design and Insights.pdf",
    },
    {
      icon: Icons.pdf,
      title: "Design and Insights.pdf",
    },
    {
      icon: Icons.pdf,
      title: "Design and Insights.pdf",
    },
  ];
  const replies = [
    {
      icon: Images.classStudent,
      content:
        "So, where can I practise doing the name card? Is it Adobe Illustrator? My trial has ended. Any other recommended platform for practising?",
    },
    {
      icon: Images.classStudent,
      content:
        "So, where can I practise doing the name card? Is it Adobe Illustrator? My trial has ended. Any other recommended platform for practising?",
    },
  ];

  return (
    <>
      {toggleAssignment && (
        <motion.main
          // whileInView={{ x: [1000, 0] }}
          // transition={{ duration: 1, ease: "easeInOut" }}
          className="app__flex-5 assignment-modalContainer"
        >
          <AssignmentModal
            toggleAssignment={toggleAssignment}
            setToggleAssignment={setToggleAssignment}
          />
        </motion.main>
      )}
      <main className="ClassDetail">
        <section className="ClassDetail__user app__flex-5">
          <User />
        </section>
        <section className="ClassDetail__head">
          <h1>Becoming a UX Designer from Scratch: Things to look out for</h1>
          <article className="ClassDetail__head-append app__flex-3">
            <p>Emma Gannon, Author, Broadcaster, Podcast Host</p>
            <div className="img-size">
              <img src={Icons.clock2} alt="clock" />
            </div>
            <span>30 mins</span>
          </article>
        </section>
        <section className="ClassDetail__videos app__flex-2">
          <article className="ClassDetail__videos-video img-size test1">
            <img src="" alt="video" />
          </article>
          <article className="ClassDetail__videos-related">
            <h5>Related Videos</h5>
            <div>
              {RelatedVideos.map((video, index) => (
                <div key={index} className="app__flex-2">
                  <div className="img-size video test">
                    <img src="" alt={index} />
                  </div>
                  <div className="about-video">
                    <h6>{video.title}</h6>
                    <p>{video.teacher}</p>
                    <div className="app__flex-3">
                      <div className="img-size">
                        <img src={Icons.clock2} alt="clock" />
                      </div>
                      <span>{video.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
        <section className="ClassDetail__content app__flex-2">
          <section className="ClassDetail__content-main">
            <article className="classDetail__content-head app__flex-3">
              <h6
                className={showAbout ? "active" : null}
                onClick={handleShowAbout}
              >
                About Course
              </h6>
              <h6
                className={showDiscussions ? "active" : null}
                onClick={handleShowDiscussions}
              >
                Discussions
              </h6>
              <h6
                className={showResources ? "active" : null}
                onClick={handleShowResources}
              >
                Projects & Resources
              </h6>
            </article>
            <article className="classDetail__content-body">
              {showAbout && (
                <div className="body-about">
                  <h4>About Course</h4>
                  <p>
                    Dream of finally finishing that draft or launching that
                    side-hustle? Make your next creative project your best yet,
                    with simple steps from creative superstar Emma Gannon!{" "}
                    <br /> <br />
                    In this new class, Emma shares the framework that allowed
                    her to overcome self-doubt and carve her own path as an
                    author, broadcaster, and podcast host. The secret to her
                    success? Fed up with feeling afraid—of failure, of not being
                    good enough, even of success—Emma dug into the science
                    behind self-sabotage and learned exactly how to get out of
                    her own way.
                    <br /> <br /> Now, Emma is sharing what she’s learned so
                    that you can do the same: unlock your creative potential
                    while feeling energized and empowered!
                  </p>
                </div>
              )}
              {showDiscussions && (
                <div className="body-discussions">
                  <h4>Discussions</h4>
                  <article className="body-discussions-article">
                    <div className="user-comment app__flex-3">
                      <div className="img-size">
                        <img src={Images.user} alt="user" />
                      </div>
                      <textarea
                        cols="30"
                        rows="1"
                        placeholder="Leave a public comment"
                      />
                    </div>
                    <div className="others-replies">
                      {replies.map((item, index) => (
                        <div className="app__flex-2" key={index}>
                          <div className="reply-image img-size">
                            <img src={item.icon} alt="reply" />
                          </div>
                          <div className="reply-content">
                            <p>{item.content}</p>
                            <textarea
                              cols="30"
                              rows="1"
                              placeholder="Leave a reply"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              )}
              {showResources && (
                <div className="body-resources">
                  <h4>body-resources</h4>
                  <p>Redesign your business card</p>
                  <h5>Assignment</h5>
                  <p>
                    Redesign your business card. Just like in the lessons,
                    create some content (just write it out—that’s how you
                    start!) and then create a structure based on what you want
                    to emphasize. Gradually add more structure and contrast to
                    the design, and see where it takes you. Experiment with
                    literary typefaces, slabs, and custom type. Make the
                    letterforms your own, have some fun, and enjoy the explosion
                    of joy that graphic design can bring to your work.
                  </p>
                  <h5>Deliverable</h5>
                  <p>
                    Upload a business card and share a bit about your design
                    decisions. A completed project may include:
                  </p>
                  <p>
                    4 designs playing with structure (student example)
                    <br /> 1 design using a literary typeface
                    <br />1 design using a slab face
                  </p>
                </div>
              )}
            </article>
          </section>
          {showResources && (
            <section className="show-resources">
              <h5>Resources</h5>
              <article className="show-resources-article">
                {resources.map((item, index) => (
                  <div className="article-content" key={index}>
                    <div className="app__flex-2">
                      <div className="img-size">
                        <img src={item.icon} alt="pdf" />
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <div className="app__flex-2">
                      <div className="img-size">
                        <img src={Icons.download} alt="download" />
                      </div>
                      <p>Download</p>
                    </div>
                  </div>
                ))}
              </article>
              <button onClick={() => setToggleAssignment(true)}>
                Submit Assignment
              </button>
            </section>
          )}
        </section>
      </main>
    </>
  );
};

export default ClassDetail;
