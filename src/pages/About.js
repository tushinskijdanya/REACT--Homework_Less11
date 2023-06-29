import { useSelector } from "react-redux";

function AboutMe () {
    const { quantity } = useSelector(state => state.pos);

    return(
        <div className="about-container">
            <div className="about-content">
                <img src="/images/about_me.jpg" alt="me" />
                <div className="quantityRecipes"><span>There are <span className="quantityRecipes-change">{quantity}</span> Kuzkin`s recipes in my blog!</span></div>
            </div>
        </div>
    )
}

export default AboutMe;

