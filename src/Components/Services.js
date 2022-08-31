import '../Styles/services.css'
import UseFetch from './UseFetch';

function Services() {
    //Importing the data from useFetch(the custom hook)
    const { data, isPending } = UseFetch("Conditions")
    return (
        <section>
            <article className='database'>
                {isPending && <h5>...Loading</h5>}
                {data.map((article) => (
                    <div className="preview" key={article.id}>
                        <img src={article.image} alt='eye' />
                        <p>{article.title}</p>
                        <p>{article.content}</p>
                    </div>
                ))}
            </article>
        
        </section>
    )
}
export default Services;