import './animation.css'
const Animation = ({ type }) => {
    const COUNTER = 6
    const PostSkeleton = () => (
    <section className="database-post" >
        <article className="preview-one">
            <section className="post">
                <p className="post-text"></p>
                <section className="book">
                    <div className="details">
                    </div>
                </section>
            </section>
        </article>
    </section>
    );
    if (type === "feed") return Array(COUNTER).fill(<PostSkeleton />)    
}
export default Animation