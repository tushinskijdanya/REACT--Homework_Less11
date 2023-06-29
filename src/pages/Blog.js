import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removePostAC } from "../store/postReducer";

function Blog () {
    const { recipes } = useSelector(state => state.pos);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const toPostPage = (post) => navigate(`/blog/${post.id}`, {state: {title: post.title, image: post.image, blog: post.blog}});

    function deleteRecipe (idx) {
        let delPost = confirm('Вы уверены, что хотите удалить этот рецепт?');
        delPost && dispatch(removePostAC(idx));
    }
    
    return(
        <div className="container">
            <div className="blog-main_content">
                {
                    recipes.map((post, idx) => {
                        return(
                        <div key={idx}>
                            <div className="blog_post">
                                <div className="blog_image"><img className="blog_image" src={post.image} alt="blog"/></div>
                                <div className="blog_content-container">
                                    <div className="blog_content">
                                        <span onClick={() => toPostPage(post)} className="blog-title">{post.title}</span>
                                        <p className="blog-stage">{post.stage}</p>
                                    </div>
                                    <span onClick={() => deleteRecipe(idx)} className="deleteRecipe-button">удалить рецепт</span>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;