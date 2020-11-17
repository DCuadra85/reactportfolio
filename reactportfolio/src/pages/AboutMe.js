import React from "react";

function AboutMe() {
    return (

        <article className="container">
        <article className="row">
            <article className="col-lg-8 col-md-8 col-xs-6 p-3 my-3 bg-light text-info">
              <span className="text-nowrap">
              <h1>
                About Me
              </h1>
              <hr></hr>
    
              </span>
                  <article className="float-left">
                  <img className = "portait mr-3" src="./assets/images/smallerimage.jpg" 
                  alt="Daniel Cuadra" width="200" height="200"></img>
                  </article>
                  
                  <p style={{color:"black"}}>
                    My name is Daniel Cuadra. I am a US Army Intelligence Corps veteran. I worked in the intelligence community for 8 years under various commands and roles.
                    After I completed my service contract with the army, I went back to school. First, I went to community college, then to San Francisco State University.
                    I majored in International Relations (diplomacy studies) with an emphasis in economy. After I completed my bachelors degree, I began working at a startup
                    company called Vagaro. I started working as technical support, as I had a technical background before my military service. I had studied C++ and worked
                    toward a CCNA. After working at Vagaro for 5 years, I was assigned numerous roles, to include: Technical Support Management, Product Management, Merchant
                    Services, Sales, and worked on an AI bot. After completing the AI bot project, I rediscovered my passion for coding.
                  
                    <br></br>
                    <br></br>
    
                    I decided to pursue a career in coding and found the UC Berkeley coding academy. My goal is for a career change that reflected my current interests.
                    Once my studies have been concluded, I intend to see what is available in the job market and possibly return back to Vagaro as a back end coder.
                  
                    <br></br>
                    <br></br>
    
                  </p>
            
            </article>
        </article>
        </article>

    )
}

export default AboutMe;