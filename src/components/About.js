import React from 'react'
import pic from '../images/deepak.jpg'
const About = () => {
    
  return (
    <div>
      <>
    <center><h2 className='my-2 container'>Developed by : Deepak Kumar Sahu</h2></center>
    <br></br>
    <img src={pic} className="rounded mx-auto d-block img-fluid" alt="Responsive"></img>
    <h2 className='my-2 container'>About Us</h2>
    <div className='container stickyFooterAbout'>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About The Site
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is very useful site which can be used to keep your important notes safe and secured in our database</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About Me
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>I am a Civil Engineering graduate from Veer Surendra Sai University of Technology Burla, currently pursuing Masters degree in Construction Technology and Management in NIT Trichy having keen interest in coding and development <br></br> <br></br>Phone : 8018228035 <br></br>Email : deepaksahusbp@gmail.com <br></br>LinkedIn : deepaksahusbp</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Address
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>Mail us to : <br></br><br></br>Pankapara, Khetrajpur<br></br>Sambalpur, Odisha - 768002</strong> 
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    </div>
  )
}

export default About