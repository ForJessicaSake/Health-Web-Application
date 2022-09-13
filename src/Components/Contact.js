import "../Styles/contact.css";

function Contact() {
  return (
    <section>
      <div className="contact-header">
        <div className="contact-header__info">
          <h1 className="contact-header__title"> Contact <span>Focus Eye</span></h1>
          <ul className="contact-header__info--list">
            <li> +234-81-203-999</li>
            <li> eyeclinic@reactproject.ehc</li>
            <li> 1, frontend team, ehc</li>
            <li> Monday-Friday: 8:00am - 4:30pm <br/>Wednesday: surgery only</li>
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
