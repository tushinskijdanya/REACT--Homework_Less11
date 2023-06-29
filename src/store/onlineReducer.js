const postState = {
    posts: []
}

const GET_ONLINE_POSTS = 'GET_ONLINE_POSTS';
const REMOVE_ONLINE_POST = 'REMOVE_ONLINE_POST';


export const onlineReducer = (state = postState, action) => {
    switch(action.type) {
        case GET_ONLINE_POSTS:
            return {...state, posts: [...state.posts, ...action.payload]}
        case REMOVE_ONLINE_POST:
            let temp = state.posts;
            temp.splice(action.payload, 1);
            return {...state, posts: temp};
        default: return state;
    }
}

export const removeOnlinePostAC = (payload) => {
    return {type: REMOVE_ONLINE_POST, payload};
}

export const getOnlinePostAC = (payload) => {
    return {type: GET_ONLINE_POSTS, payload};
}

