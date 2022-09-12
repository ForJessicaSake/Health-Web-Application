import "../Styles/services.css";
import UseFetch from "./UseFetch";
import Animation from "../Animation/Animation";
import { Link } from 'react-router-dom'
import { BsArrowRightCircle } from 'react-icons/bs'
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
          <h3>services we offer <br />at <span>focus eye </span></h3>
          <p>Our clinic offers a wide range of private ophthalmologist services.
          </p>
          <Link to="/contact" className="btn">Book a Consultation</Link>
          <p className="small-text"><span> <FaArrowDown className="arrow" /></span> Explore All Services</p>
        </div >


        <div>
          <img className="hero-image" src={pic} alt="man pointing" />
        </div>
      </div >

      {/* Services database section */}

      <section className="database" >
        {isPending ? <Animation type = "feed"/> :
          data.map((article) => (
            <article className="preview" key={article.id}>
              <img src={article.image} alt="eye" />
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <section className="book">
                <Link to='/contact'><button className="btn">Book a Consultation </button></Link>
                  <div className="details">
                    <span><BsArrowRightCircle className="icon" /></span> <h5>More details</h5>
                  </div>
                </Link>
              </section>
            </article>
          ))
        }
      </section >

      {/* Services bottom section */}
      <aside className="personal-services">
        <section className="row">
          <div className="image-cont">
            <img src={pics} alt="eye machine" />
          </div>

          <article className="ps-content">
            <h3>providing personal service</h3>
            <p>It is very important for everyone to be healthy. A successful career, relations with relatives and colleagues,
              solving everyday problems - all this depends on the condition of the body. Illnesses and ailments create serious difficulties
              which can be avoided with timely examinations and treatment.
            </p>
            <p>Dr. Ghaznawi is a member of the American Society of Cataract and Refractive Surgeons. With her extensive training
              experience, you get accurate diagnosis and treatment that suits your needs. The result is better eyesight and
              a higher quality of life.
            </p>
            <Link to="/conditions" className="ps-btn">Explore Conditions</Link>
          </article>
        </section>

      </aside>

    </section >
  );
}

export default Services;
