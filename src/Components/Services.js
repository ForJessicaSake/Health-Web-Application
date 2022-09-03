import "../Styles/services.css";
import UseFetch from "./UseFetch";
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa'
import pic from "../images/pointing_finger.png";
import pics from "../images/eye machine.jpg";


function Services() {
  //Importing the data from useFetch(the custom hook)
  const { data, isPending } = UseFetch("Conditions");

  return (
    <section>

      {/* Services hero section */}
      <div className="services-hero">
        <div className="main-content">
          <h3>services we offer <br/>at <span>focus eye </span></h3>
          <p>Our clinic offers a wide range of private ophthalmologist services.
          </p>
          <a href="#" className="btn">Book a Consultation</a>
          <p className="small-text"><span><FaArrowDown className="arrow"/></span> Explore All Services</p>
        </div>


        <div>
          <img className="hero-image" src={pic} alt="man pointing" />
        </div>

      </div>


      {/* <div className="first-section">
        <div class="wrapper-first-section">
            
            <div class="text1-wrapper">
                <h1 class="first-text">services we offer <br/>at <span>focus eye</span></h1>
                <p>
                Our clinic offers a wide range of private ophthalmologist services.
                </p>
                <a href="#" className="btn">Book a Consultation</a>
                <p className="small-text"><span><FaArrowDown className="arrow"/></span> Explore All Services</p>
            </div>
            <div class="img1-wrapper">
                <img src={pic} alt="laptop" />
            </div>
            
        </div>
      </div> */}

    {/* <div className="headers">
      <div class="header-inner container">
        <div class="header-intro">
          <h1 class="header-intro-heading">
            Hi, I'm Juliet. <br /> A Frontend Developer.
          </h1>
          <p class="header-intro-lead">
            I'm skilled at converting web designs from figma and dribble, into functional and responsive websites and web apps.
          </p>
          <div class="header-intro-buttons">
            <a href="https://drive.google.com/file/d/1GN0aatE_eLj7_230Rt2g3AEG29Mn5bQ6/view?usp=drivesdk" class="header-lightgreen-button" target="_blank"><i class="fa fa-download"></i> Download Resume</a>
          </div>
        </div>

        <div class="">
          <img src={pic} class="bg-image" />
        </div>
      </div>
    </div> */}


      <article className="database">
        {isPending && <h5>...Loading</h5>}
        {data.map((article) => (
          <div className="preview" key={article.id}>
            <img src={article.image} alt="eye" />
            <p>{article.title}</p>
            <p>{article.content}</p>
          </div>
        ))}
      </article>


      {/* Services bottom section */}
      <aside className="personal-services">
        <div className="row">

          <div className="image-cont">
            <img src={pics} alt="eye machine" />
          </div>

          <div className="ps-content">
            <h3>providing personal service</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Debitis, provident beatae, repellat asperiores sequi error esse
              assumenda quibusdam cumque, alias non earum explicabo sit
              officiis dignissimos architecto accusantium natus dolore nobis.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Debitis, provident beatae, repellat asperiores sequi error esse
              assumenda quibusdam cumque, alias non earum explicabo sit
              officiis dignissimos architecto accusantium natus dolore nobis.
            </p>
            <a href="" className="ps-btn">Explore Conditions</a>
          </div>

        </div>
      </aside>
    </section>
  );
}

export default Services;
