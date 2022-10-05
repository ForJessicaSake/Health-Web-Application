import EyeMachine from "../images/eye machine.jpg"

const Team = () => {
    return (
        <div className="home-team">
            <div className="left">
                <div className="main-img">
                    <img src={EyeMachine} alt="eye machine" />
                </div>
                <div className="side-img">
                    <p><span><span className="digit">14</span> years</span><br /> of experience</p>
                </div>
            </div>
            <div className="right">
                <p className="right-title">experts who care</p>
                <p className="right-text">Focus Eye is a clinic providing private Ophthalmology eye care in New York. Our private Ophthalmologists are experienced Consultants who specialize in Cataract surgery, Glaucoma treatment etc. We provide an efficient service for Laser Glaucoma Surgery and handle all aspects of General Ophthalmology.</p>
                <p className="right-text">You will enjoy courteous, personalized, medical attention and an exceptionally high level of care.</p>
                <a href="/" className="team-btn">Meet The Team</a>
            </div>
        </div>
    );
}

export default Team;