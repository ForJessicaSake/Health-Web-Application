import UseFetch from './UseFetch';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'


function ServiceList() {

    const { data:article, isPending } = UseFetch(`Conditions`);
    const {id} = useParams()

  return (
 <section className="database">
        {isPending && <h5>...</h5>}
        {article && (  
          <article className="list-preview">
            <img src={article.image} alt="eye" />
            <h3>{article.title}</h3>
            <p>{article.content}</p>

            <section className="book">               
              <button className="btn"><Link to='/contact'>Book a Consultation</Link></button>
            </section>
          </article>
        )}
      </section>  
      )
}

export default ServiceList