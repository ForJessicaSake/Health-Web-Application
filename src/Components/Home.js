import '../Styles/home.css'
import UseFetch from './UseFetch';

function Home() {
    //Importing the data from useFetch(the custom hook)
    const { data, isPending } = UseFetch("Home")

    return (
        <section>
            <h1> This is the Home section</h1>
            {/* this is how to map through the data from the collection home */}
            {/* 
         {isPending && <h5>...Loading</h5>}
            {data.map((article) => (
                <div className="preview" key={article.id}>
                    <p>{article.title}</p>
                    <p>{article.content}</p>
                </div>
            ))} */}
        </section>
    )
}

export default Home;