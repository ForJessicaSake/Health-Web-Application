import "../Styles/services.css";
import UseFetch from "./UseFetch";

function Services() {
  //Importing the data from useFetch(the custom hook)
  const { data, isPending } = UseFetch("Conditions");

  return (
    <section>
      {/* Services hero section */}

      <div className="services-home-content">
        <div className="services-main-content">
          <h3>services we offer <span>at focus eye care</span></h3>
          <p>Our clinic offers jhiaivabndv  </p>
          <button className="services-btn">Book a consultation</button>
        </div>
        <div>
          <img className="services-image" src="" alt='hero' />
        </div>
      </div>

        <article className="database">
          {isPending && <h5>...Loading</h5>}
          {data.map((article) => (
            <div className="preview" key={article.id}>
              <img src={article.image} alt="eye" />
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </article>

      {/* Services bottom section */}
      <aside className="personal-service">
        <div className="services-img-cont">
          <img className="services-bottom-image" src="" alt="eye machine" />
        </div>
        <div className="explore-content">
          <h2>providing personal services</h2>
          <p>Lorem ipsum</p>
          <div className="explore">
            <button className="explore-btn">Explore conditions</button>
          </div>
        </div>
      </aside>

    </section>
  );
}

export default Services;
