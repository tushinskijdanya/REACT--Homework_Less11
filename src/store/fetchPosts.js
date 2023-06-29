import { getOnlinePostAC } from "./onlineReducer";

export const getFetchPostsTAC = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(getOnlinePostAC(data)))
    }
}