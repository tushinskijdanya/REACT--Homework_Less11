const notes = [];

const noteState = {
    notes: notes,
    quant: notes.length
}

const PUSH_NOTE = 'PUSH_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

export const noteReducer = (state = noteState, action) => {
    switch(action.type) {
        case PUSH_NOTE:
            return {...state, notes: [...state.notes, action.payload], quant: state.quant + 1};
        case REMOVE_NOTE:
            let temp = state.notes;
            temp.splice(action.payload, 1)
            return {...state, notes: temp, quant: state.quant - 1};
        case EDIT_NOTE:
            let temp1 = state.notes;
            temp1[action.payload.id - 1] = action.payload;
            return {...state, notes: temp1};
        default: return state;
    }
}

export const pushNoteAC = (payload) => {
    return {type: PUSH_NOTE, payload};
}

export const removeNoteAC = (payload) => {
    return {type: REMOVE_NOTE, payload};
}

export const editNoteAC = (payload) => {
    return {type: EDIT_NOTE, payload};
}