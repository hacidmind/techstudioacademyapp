import React, { useState, useRef } from "react";
import Badge from "react-bootstrap/Badge";
import { AiOutlinePlus } from "react-icons/ai";

import "../../scss/page15.scss";
import { Images } from "../../Icons&Images";

const Page15 = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const skillRef = useRef();

  const [tools, setTools] = useState([]);
  const [tool, setTool] = useState("");
  const toolRef = useRef();

  const handlePassInSkill = (e) => {
    e.preventDefault();
    if (skill) {
      setSkills([...skills, skill]);
      skillRef.current.value = "";
    }
  };

  const handlePassInTool = (e) => {
    e.preventDefault();
    if (tool) {
      setTools([...tools, tool]);
      toolRef.current.value = "";
    }
  };

  const italics = () => {
    console.log("italics clicked");
  };

  const bold = () => {
    console.log("bold clicked");
  };

  return (
    <main className="page15 container">
      <h2 className="Job">Job Requirement</h2>

      <div className="container layout">
        <div className="grid_div">
          <div>
            <p>
              <b>Job title</b>
            </p>
            <input
              className="job_inp3 job"
              placeholder="Enter job title for this job post"
            />
          </div>
          <div>
            <p>
              <b>Job Location</b>
            </p>
            <input
              className="job_inp3 job"
              placeholder="Enter job title for this job post"
            />
          </div>
          <div>
            <p>
              <b>What position type are you offering?</b>
            </p>

            <div className="job_inp">
              <select className="job_inp3 job2">
                <option value="select">Select Job Type</option>
                <option value="select">Software Developer</option>
                <option value="select">Frontend Developer</option>
                <option value="select">Data Sciences</option>
              </select>
            </div>
          </div>
          <div>
            <p>
              <b>What level of experience do you want?</b>
            </p>
            {/* <input className='job_inp' placeholder='Choose the minimum experience level required' /> */}
            <div className="job_inp">
              <select className="job_inp3 job2">
                <option value="select">
                  Choose the minimum experience level required
                </option>
                <option value="select">1 year</option>
                <option value="select">2 years</option>
                <option value="select">3 years</option>
                <option value="select">4 years</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <p>
            <b>Job description</b>
          </p>
          <div className="inp_div">
            <input
              className="inp_des"
              placeholder="Enter the title of position you want to fill"
            />
            <div className="btn-a .d-sm-none .d-md-block">
              <button
                className="btn-1"
                onClick={() => {
                  console.log("justify clicked");
                }}
              >
                {" "}
                <img className="texticon" src={Images.justify} alt="" />
              </button>
              <button className="btn-1" onClick={bold}>
                <img className="texticon" src={Images.Bold} alt="" />
              </button>
              {/* <b className='I'>B </b> */}
              <button className="btn-1" onClick={italics}>
                <i className="I">I</i>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <p>
            <b>Minimum Qualification</b>
          </p>
          <div className="inp_div">
            <input
              className="inp_des"
              placeholder="Enter the title of position you want to fill"
            />
            <div className="btn-a">
              <button
                className="btn-1"
                onClick={() => {
                  console.log("justify clicked");
                }}
              >
                <img src={Images.justify} alt="" />
              </button>
              <button className="btn-1" onClick={bold}>
                <img className="texticon" src={Images.Bold} alt="" />
              </button>
              <button className="btn-1" onClick={italics}>
                <i className="I">I</i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex_div">
          <div className="skills">
            <div>
              <p>
                What <b>skills or languages</b> are you looking to hire
              </p>
              <div className="skill-box">
                <input
                  className="job_inp3"
                  placeholder="Add new skill"
                  ref={skillRef}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handlePassInSkill(e)}
                />
                <AiOutlinePlus onClick={handlePassInSkill} />
              </div>
            </div>
            <div className="badge-container">
              {skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="skills">
            <div>
              <p className="p_skills">
                What <b>tools</b> would be used
              </p>
              <div className="skill-box">
                <input
                  className="job_inp3"
                  placeholder="Add new tool"
                  ref={toolRef}
                  onChange={(e) => setTool(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handlePassInTool(e)}
                />
                <AiOutlinePlus onClick={handlePassInTool} />
              </div>
            </div>
            <div className="badge-container">
              {tools.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>
            {/* map input here */}
          </div>
        </div>
        <div className="">
          <p>
            <b>Responsibilities</b>
          </p>
          <div className="inp_div">
            <input
              className="inp_des"
              placeholder="Enter the title of position you want to fill"
            />
            <div className="btn-a">
              <button
                className="btn-1"
                onClick={() => {
                  console.log("justify clicked");
                }}
              >
                <img src={Images.justify} alt="" />
              </button>
              <button className="btn-1" onClick={bold}>
                <img className="texticon" src={Images.Bold} alt="" />
              </button>
              <button className="btn-1" onClick={italics}>
                <i className="I">I</i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex_div">
          <div className="skills edit">
            <p className="p_skills pay">
              <b>What is the pay range</b>
            </p>

            <select className="job_inp4">
              <option value="select">Hiring for a week</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
            </select>
          </div>
          <div className="skills edit">
            <p className="p_skills2">
              <b>For how will you be taking applicants</b>
            </p>

            <select className="job_inp4">
              <option value="select">set application deadline</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
            </select>
          </div>
        </div>

        <button className="btn btn-primary ">SUBMIT</button>
      </div>
    </main>
  );
};

export default Page15;
