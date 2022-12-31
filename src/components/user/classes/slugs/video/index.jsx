import React from 'react';
import { RiRecordCircleLine } from "react-icons/ri";

import { Icons, Images } from '../../../../../Icons&Images';
import "../../../../../scss/videocall.scss";

const Video = () => {

    //I plan to render them according to a timestamp but that will be after I am done with all the UIs
    // const messengers = [
    //   {
    //     messenger: {
    //       name: "Azeezat Soneye",
    //       messages: ["Hey-hey!"],
    //     },
    //   },
    //   {
    //     messenger: {
    //       name: "Victor Olusanya",
    //       messages: [
    //         "Hi Everyone!",
    //         "Victor from Iyanapaja",
    //         "It’s great to be here",
    //       ],
    //     },
    //   },
    //   {
    //     messenger: {
    //       name: "me",
    //       messages: [
    //         "I am Sherif and I am happy to be hear. I hope this goes well",
    //       ],
    //     },
    //   },
    // ];
    
  return (
    <div className="videocall app__flex-2">
      <section className="videocall__content">
        <h3>Becoming a UX Designer from Scra…</h3>
        <p>Emma Gannon, Author, Broadcaster, Podcast Host</p>
        <article className="videocall__content-article">
          <div className="article-video img-size">
            <img src={Images.videocall} alt="video" />
          </div>
          <div className="article-items app__flex">
            <div className="item img-size">
              <img src={Icons.cam} alt="" />
            </div>
            <div className="item img-size">
              <img src={Icons.slides} alt="" />
            </div>
            <div className="item img-size">
              <RiRecordCircleLine />
            </div>
            <div className="item img-size">
              <img src={Icons.mic} alt="" />
            </div>
            <div className="item img-size">
              <img src={Icons.share} alt="" />
            </div>
          </div>
        </article>
      </section>
      <section className="videocall__chat">
        <article className="videocall__chat-header app__flex">
          <h6>Chat</h6>
          <span>Attendee</span>
        </article>
        <article className="videocall__chat-messages">
          <div className="app__flex">
            <div className="img-size">
              <img src={Images.classStudent} alt="student" />
            </div>
            <div>
              <span>Azeezat Soneye</span>
              <p>Hey-hey!</p>
            </div>
          </div>
        </article>
        <article className="videocall__chat-send">
          <p>Text</p>
        </article>
      </section>
    </div>
  )
}

export default Video;