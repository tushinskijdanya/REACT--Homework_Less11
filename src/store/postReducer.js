import { recipes } from "../data/kuzya`s_recipes";

const postState = {
    recipes: recipes,
    quantity: recipes.length
}

const PUSH_POST = 'PUSH_POST';
const REMOVE_POST = 'REMOVE_POST';


export const postReducer = (state = postState, action) => {
    switch(action.type) {
        case PUSH_POST:
            return {...state, posts: [...state.recipes, action.payload], quantity: state.quantity + 1};
        case REMOVE_POST:
            let temp = state.recipes;
            temp.splice(action.payload, 1);
            return {...state, recipes: temp, quantity: state.quantity - 1};
        default: return state;
    }
}

export const pushPostAC = (payload) => {
    return {type: PUSH_POST, payload};
}

export const removePostAC = (payload) => {
    return {type: 'REMOVE_POST', payload};
}