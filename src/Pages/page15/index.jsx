import React from 'react';
// import React, {useState} from 'react';
// import '../../scss/page15.scss';
import { Images } from "../../Icons&Images";
const page15 = () => {
  // let styleElement =  document.querySelector('.inp_des')
  const italics = ()=>{
      console.log("italics clicked");

  } 
  const bold = ()=>{
    console.log("bold clicked");


  }
  return (
    
    <div className='page15 container'>
      <h2 className='Job' >Job Requirement</h2>   
      
      <div className='container layout'>
        <div className='grid_div'>
          <div>
          <p><b>Job title</b></p>
          <input className='job_inp3 job' placeholder='Enter job title for this job post' />
          </div>
          <div>
          <p><b>Job Location</b></p>
          <input className='job_inp3 job' placeholder='Enter job title for this job post' />
          </div>
          <div>
            <p><b>What position type are you offering?</b></p>
            
            <div className='job_inp'>
              
              <select className="job_inp3 job2">
                <option value="select">Select Job Type</option>
                <option value="select">Software Developer</option>
                <option value="select">Frontend Developer</option>
                <option value="select">Data Sciences</option>
              </select>      
            </div>
          </div>
          <div>
            <p><b>What level of experience do you want?</b></p>
            {/* <input className='job_inp' placeholder='Choose the minimum experience level required' /> */}
            <div className='job_inp'>
              
              <select className="job_inp3 job2">
                <option value="select">Choose the minimum experience level required</option>
                <option value="select">1 year</option>
                <option value="select">2 years</option>
                <option value="select">3 years</option>
                <option value="select">4 years</option>
              </select>      
            </div>
          </div>
        </div>
        <div>
          <p><b>Job description</b></p>
          <div className='inp_div'>
            <input   className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a .d-sm-none .d-md-block' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}> <img className='texticon' src={Images.justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Images.Bold} alt=""/></button>
              {/* <b className='I'>B </b> */}
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        <div className=''>
          <p><b>Minimum Qualification</b></p>
          <div className='inp_div'>
            <input className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}><img src={Images.justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Images.Bold} alt=""/></button>
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        <div className='flex_div'>
          <div className='skills' >
            <div>
              <p>What <b>skills or languages</b> are you looking to hire</p>
              <input className='job_inp3' placeholder='Add new skill' />
            </div>
            
            {/* map input here */}
            
          </div>
          <div className='skills' >
            <div>
              <p className='p_skills'>What <b>tools</b> would be used</p>
              <input className='job_inp3' placeholder='Add new tool' />
            
            </div>
            
            {/* map input here */}
            
          </div>
        </div>
        <div className=''>
          <p><b>Responsibilities</b></p>
          <div className='inp_div'>
            <input className='inp_des' placeholder='Enter the title of position you want to fill' />
            <div className='btn-a' >
              <button className='btn-1' onClick={()=>{
                console.log("justify clicked");
              }}><img src={Images.justify} alt=""/></button>
              <button className='btn-1' onClick={bold}><img className='texticon' src={Images.Bold} alt=""/></button>
              <button className='btn-1' onClick={italics}><i className='I'>I</i></button>
            </div>
          </div>
        </div>
        
        <div className='flex_div'>
          <div className='skills edit' >
            
            <p className='p_skills pay'><b>What is the pay range</b></p>
              
          <select className="job_inp4">
              <option value="select">Hiring for a week</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
          </select>  
            
          </div>
          <div className='skills edit' >
            
            <p className='p_skills2'><b>For how will you be taking applicants</b></p>
              
            
            <select className="job_inp4">
              <option value="select">set application deadline</option>
              <option value="select">Software Developer</option>
              <option value="select">Frontend Developer</option>
              <option value="select">Data Sciences</option>
            </select>              
          </div>
        </div>

        <button  className='btn btn-primary '>SUBMIT</button>
      </div>
    </div>

  )
}

export default page15
