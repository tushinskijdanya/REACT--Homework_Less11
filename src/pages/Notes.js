import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushNoteAC } from "../store/noteReducer";
import { Link } from "react-router-dom";

function Notes () {
    const dispatch = useDispatch();
    const { quant, notes } = useSelector(state => state.not);
    const [newNote, setNewNote] = useState({
        note: ''
    });

    function changeInput(e) {
        setNewNote(prev => ({...prev, note: e.target.value}));
    }

    function saveNote () {
        if (newNote.note !== '') {
            dispatch(pushNoteAC({note: newNote.note, id: notes.length + 1}));
            setNewNote((prev) => {
                let temp = {...prev};
                temp.note = '';
                return temp;
            })
            alert('Запись сохранена!');
        } else {
            alert('Заполните пустое поле вашей записи!');
        }
    }

    function clearNote () {
        setNewNote((prev) => {
            let temp = {...prev};
            temp.note = '';
            return temp;
        });
    }


    return(
        <div className="container">
            <div className="notes-container">
                <div className="new-note">
                    <p className="newNote-title">Новая запись:</p>
                    <textarea className="newNote-input" onChange={(e) => changeInput(e)} name="note" type="text" value={newNote.note}/>
                    <div className="newNotes-buttons">
                        <button onClick={saveNote} className="saveNewNote">сохранить</button>
                        <button onClick={clearNote} className="clearNewNote">очистить</button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="allNotes">
                    <Link to="/notes/all" className={quant < 1 ? "allNotes-title disabled" : "allNotes-title"}>ВСЕ ЗАМЕТКИ <span className="allNotes-quant">({quant})</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Notes;