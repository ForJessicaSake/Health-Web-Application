import "../Styles/contact.css";
import { BiLocationPlus, BiCalendar, BiPhoneCall } from "react-icons/bi";
import { GoMailRead } from "react-icons/go";
import woman from "../images/smiling-woman-contact.png";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    serviceSelect: '',
    email: "",
    phone: "",
    isChecked: false,
  });
  console.log(formData);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event){
      event.preventDefault()
      if (formData.isChecked){
        console.log('successfully submittted')
      }else {console.log('cant submit form')}
  }
  return (
    <section>
      <div className="contact-header">
        <div className="contact-header__info">
          <h1 className="contact-header__title">
            {" "}
            Contact <span>Focus Eye</span>
          </h1>
          <ul className="contact-header__info--list">
            <li>
              {" "}
              <BiPhoneCall size={30} className="contact-header__icon" />
              +234-81-203-999
            </li>
            <li>
              {" "}
              <GoMailRead size={30} className="contact-header__icon" />{" "}
              eyeclinic@reactproject.ehc
            </li>
            <li>
              {" "}
              <BiLocationPlus size={30} className="contact-header__icon" /> 1,
              frontend team, ehc
            </li>
            <li>
              {" "}
              <BiCalendar size={30} className="contact-header__icon" />{" "}
              Monday-Friday: 8:00am - 4:30pm <br />
              Wednesday: surgery only
            </li>
          </ul>
        </div>
        <div className="contact-header__image">
          <img alt="woman" src={woman} />
        </div>
      </div>
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3 id="one">GET IN TOUCH</h3>
            <h5 id="two">
              Feel free to get in touch. We'd love to hear from you!
            </h5>
          </div>
          <div className="form-info">
            <label> Hello, my name is</label>
            <input
              type="text"
              name="name"
              placeholder="type here"
              value={formData.name}
              onChange={handleChange}
            ></input>
            <label >and I'm looking for</label>
            <select id="services" 
            value={formData.serviceSelect}
            name = 'serviceSelect'
              onChange={handleChange}>
              <option value="Edge" > select Dropdown</option>
              <option value="Firefox" >Checkup</option>
              <option value="Chrome" >Consultation</option>
              <option value="Opera" >Surgery</option>
              <option value="Safari" >Glasses</option>
            </select>
          
          </div>
          <div className="form-info">
            <label> Get in touch with me at</label>
            <input
              type="text"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <label>or</label>
            <input
              type="text "
              name="phone"
              placeholder="your phone"
              value={formData.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-button">
            <div className="form-button__checkbox">
              <input
                type="checkbox"
                checked={formData.isChecked}
                name="isChecked"
                onChange={handleChange}
              ></input>
              <label htmlFor="check">
                By submitting this form you confirm that you are happy for us to
                contact you by phone, messaging and email
              </label>
            </div>
            <button className="button">Send an Enquiry</button>
          </div>
        </form>
        <div className="form-top-button">
          <div className="top">
          <button className="top-button">lets chat</button>
          <button className="bottom-button">ctrl A</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
