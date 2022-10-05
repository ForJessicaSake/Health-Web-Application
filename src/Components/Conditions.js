import "../Styles/conditions.css";
import UseFetch from "./UseFetch";
import { BsArrowDownCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Conditions() {
  //Importing the data from useFetch(the custom hook)
  const { data } = UseFetch("Services");

  return (
    <section className="conditions">
      <section className="conditions-data">
        <div className="circle"></div>
        {data.map((article) => (
          <div className="conditions-list" key={article.id}>
            <p className="title">{article.title}</p>
            <p className="content">{article.content}</p>

            <div className="learn-more">
              <span className="arrow-right">
                <BsArrowRightCircleFill />
              </span>
              <p className="explore-more">Explore More</p>
            </div>
          </div>
        ))}
        <div className="conditions-list">
          <p>
            <span>Learn More</span>
            <span>About Other Disorders</span>
            <span className="arrow-down">
              <BsArrowDownCircleFill />
            </span>
          </p>
        </div>
      </section>
    </section>
  );
}

export default Conditions;
