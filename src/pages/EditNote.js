import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { editNoteAC } from "../store/noteReducer";

function EditNote () {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { note, id } = state;
    const [editNote, setEditNote] = useState({
        note: note,
        id: id
    });

    const navigate = useNavigate();
    function saveNote () {
        dispatch(editNoteAC(editNote));
        navigate('/notes/all');
    }

    function clearNote () {
        setEditNote((prev) => {
            let temp = {...prev};
            temp.note = note;
            temp.id = id;
            return temp;
        })
        navigate('/notes/all');
    }

    function changeInput(e) {
        setEditNote(prev => ({...prev, note: e.target.value}));
    }

    return(
        <div className="container">
            <div className="notes-container">
                <div className="new-note">
                    <textarea className="newNote-input" onChange={(e) => changeInput(e)} type="text" value={editNote.note}/>
                    <div className="newNotes-buttons">
                        <button onClick={saveNote} className="saveNewNote">сохранить изменения</button>
                        <button onClick={clearNote} className="clearNewNote">отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNote;