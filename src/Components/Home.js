import '../Styles/home.css'
import UseFetch from './UseFetch';
import nurse from '../images/nurse.png'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Hero from './Hero';
import Team from './Team';

function Home() {
    //Importing the data from useFetch(the custom hook)
    const { data, isPending } = UseFetch("Home")

    return (
        <section className="home">
            <Hero />
            <Team />
            <section className="homeDatabase">
                {isPending && <h5>...Loading</h5>}
                {data.map((article) => (
                    <div className="preview" key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <div className='learn More'>
                            <span><BsArrowRightCircle className="icon" /></span> <h5>Learn More</h5>
                        </div>
                    </div>
                ))}
            </section>

            {/* qualification section */}
            <section>
                <div>
                    <img src={nurse} alt="nurse" />
                </div>
                <div className='QScontent'>
                    <h3>OUR QUALIFICATIONS</h3>
                    <p>Dr. Neelofar Chaznawi is aaa board- certified ophthalmologist and cornea and ecternal disease specialist. Her goal as a practitioner is to keep her patients well informed, and to work with them to develop a treatment plan best suited to their individual needs. Dr. Chaznawi is board certified from the American Board of ophthalmologist and is a member of professional organizations including the American Academy of ophthalmology, the American Society of Cataract and Refractive Surgeons, and Women in Ophthalmology </p>
                    <section className="book">
                        <Link to='/contact'><button className="btn">Meet Dr. Chaznawi </button></Link>
                        <div className="details">
                            <span><BsArrowRightCircle className="icon" /></span> <h5>Open Certicates</h5>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Home;