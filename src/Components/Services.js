import "../Styles/services.css";
import UseFetch from "./UseFetch";
import { Link } from 'react-router-dom'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FaArrowDown } from 'react-icons/fa'
// import pic from "../images/pointing_finger.png";
// import pics from "../images/eye machine.jpg";

function Services() {
  //Importing the data from useFetch(the custom hook)
  const { data, isPending } = UseFetch("Conditions");

  return (
    <section>
      {/* Services hero section */}
      <div className="services-hero">
        <div className="main-content">
          <h3>services we offer <br />at <span>focus eye </span></h3>
          <p>Our clinic offers a wide range of private ophthalmologist services.
          </p>
          <Link to="/contact" className="btn">Book a Consultation</Link>
          <p className="small-text"><span><FaArrowDown className="arrow" /></span> Explore All Services</p>
        </div>

        <div>
          {/* <img className="hero-image" src={pic} alt="man pointing" /> */}
        </div>
      </div>

      {/* Services database section */}

      <section className="database">
        {isPending && <h5>...</h5>}
        {data.map((article) => (
          <article className="preview" key={article.id}>
            <img src={article.image} alt="eye" />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <section className="book">
              <button className="btn"><Link to='/contact'>Book a Consultation</Link></button>
              <div className="details">
                <Link to = '/contact'>
                  <span><BsArrowRightCircle className="icon" /></span> <h5>More details</h5>
                </Link>
              </div>
            </section>
          </article>
        ))}
      </section>

      {/* Services bottom section */}
      <aside className="personal-services">
        <div className="row">

          <div className="image-cont">
            {/* <img src={pics} alt="eye machine" /> */}
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
            <Link to="/conditions" className="ps-btn">Explore Conditions</Link>
          </div>

        </div>
      </aside>

    </section >
  );
}

export default Services;
