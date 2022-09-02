import '../Styles/conditions.css'
import "bootstrap/dist/css/bootstrap.css";
function Conditions() {
  return (
    <section>
      <h1> Conditions page</h1>
      <hr />
      <div className ="container">
        <h3>
        Conditions we treat <div>at <span>focus eye</span>
        </div>
        </h3>
        <p>
          Our clinic offers a wide range of private 
          ophthalmelogist services.
        </p>
        <button>
          Book a Consultation
        </button>
        <p className="firstLink">
          <a href ="/">
        <i className="fa-solid fa-circle-plus plus"></i>
        Explore All Conditions
        </a>
        </p>
        <div className ="row grids">
          <div className= "col-3 Astigmatism">
            <strong> ASTIGMATISM</strong>
            <p className ="lastLink">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
        <i className="fa-solid fa-circle-plus borderPlus"></i>
        <span className="spanBorder">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Cataracts">
            <strong> Cataracts</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Dry-eye">
            <strong> Dry eye</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Glaucoma">
            <strong> Glaucoma</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Hyperopia">
            <strong> Hyperopia</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Keratoconus">
            <strong>Keratoconus</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Myopia">
            <strong> Myopia</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
            <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Presbyopia">
            <strong> Presbyopia</strong>
            <p className ="otherLinks">
            Dr. Ghazanawi will provide you with a detailed and personalized dry eye
            <br />
            <br />
            <a href ="/">
        <i className="fa-solid fa-circle-plus otherPlus"></i>
        <span className="spanPlus">Explore More</span>
        </a>
            </p>
          </div>
          <div className= "col-3 Learn">
            <p className ="lastLink">
            <a href ="/">
              Learn More about other conditions
              <br />
        <i className="fa-solid fa-circle-plus plus"></i>
        </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Conditions;
