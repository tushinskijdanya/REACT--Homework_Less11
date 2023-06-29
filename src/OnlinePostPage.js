import { useLocation } from "react-router-dom";

function OnlinePost () {
    const { state } = useLocation();
    const { title, body } = state;

    return(
        <div className="container">
            <div className="post-page_content">
                <p className="post-title">{title}</p>
                <div className="post-body_content"><p className="post-body">{body}</p></div>
            </div>
        </div>
    )

}

export default OnlinePost;