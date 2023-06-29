import { useLocation } from "react-router-dom";

function BlogPost () {
    const { state } = useLocation();
    const { title, image, blog } = state;

    return(
        <div className="container">
            <div className="post-page_content">
                <p className="post-title">{title}</p>
                <div className="post-image"><img className="postImage" src={image} alt="post"/></div>
                <div className="post-body_content"><p className="post-body">{blog}</p></div>
            </div>
        </div>
    )
}

export default BlogPost;