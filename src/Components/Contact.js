import "../Styles/contact.css";
import {BiLocationPlus, BiCalendar, BiPhoneCall} from 'react-icons/bi'
import {GoMailRead} from 'react-icons/go'

function Contact() {
  return (
    <section>
      <div className="contact-header">
        <div className="contact-header__info">
          <h1 className="contact-header__title"> Contact <span>Focus Eye</span></h1>
          <ul className="contact-header__info--list">
            <li> <BiPhoneCall size={30} style={{ borderRadius:'50%', border: '2px solid #02b0eb', padding:'4px',color:'#02b0eb', margin:'2px'}}/>+234-81-203-999</li>
            <li> <GoMailRead size={30} style={{ borderRadius:'50%', border: '2px solid #02b0eb', padding:'4px',color:'#02b0eb' }}/> eyeclinic@reactproject.ehc</li>
            <li> <BiLocationPlus size={30} style={{ borderRadius:'50%', border: '2px solid #02b0eb', padding:'4px' ,color:'#02b0eb'}}/> 1, frontend team, ehc</li>
            <li> <BiCalendar size={30} style={{ borderRadius:'50%', border: '2px solid #02b0eb', padding:'4px' ,color:'#02b0eb'}}/> Monday-Friday: 8:00am - 4:30pm <br/>Wednesday: surgery only</li>
          </ul>
        </div>
        <div className="contact-header__image">
          <img alt="woman"/>
        </div>
      </div>
      <div>
        <div className="contact-form">
          <form className="form">
          <h3>GET IN TOUCH</h3>
          <h5>Feel free to get in touch. We'd love to hear from you!</h5>
            <div>
            <label> Hello, my name is</label>
            <input type='text'></input>
            </div>
            <div>
            <label> Hello, my name is</label>
            <input type='text'></input>
            </div>
            <div>
            <label> Hello, my name is</label>
            <input type='text'></input>
            </div>
            <div>
            <label> Hello, my name is</label>
            <input type='text'></input>
            </div>
          </form>
          <div>
            <button>lets chat</button>
            <button>ctrl A</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
