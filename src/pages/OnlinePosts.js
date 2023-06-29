import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFetchPostsTAC } from "../store/fetchPosts";
import { removeOnlinePostAC } from "../store/onlineReducer";


function OnlinePosts () {
    const { posts } = useSelector(state => state.onl);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const toPostPage = (post) => navigate(`/onlineposts/${post.id}`, {state: {title: post.title, body: post.body}});

    function deleteRecipe (idx) {
        let delPost = confirm('Вы уверены, что хотите удалить этот рецепт?');
        delPost && dispatch(removeOnlinePostAC(idx));
    }

    useEffect(() => {
        dispatch(getFetchPostsTAC())
    }, [])
    
    return(
        <div className="container">
            <div className="blog-main_content">
                {
                    posts.map((post, idx) => {
                        return(
                        <div key={idx}>
                            <div className="blog_post">
                                <div className="blog_content-container">
                                    <div className="blog_content">
                                        <span onClick={() => toPostPage(post)} className="blog-title">{post.title}</span>
                                    </div>
                                    <span onClick={() => deleteRecipe(idx)} className="deleteRecipe-button">удалить пост</span>
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

export default OnlinePosts;