import { useDispatch, useSelector } from "react-redux";
import { removeNoteAC } from "../store/noteReducer";
import { useNavigate } from "react-router-dom";

function AllNotes () {
    const navigate = useNavigate();
    const { notes } = useSelector(state => state.not);
    const editNote = (post) => navigate(`/notes/all/editnote/${post.id}`, {state: {id: post.id, note: post.note}});

    const dispatch = useDispatch();
    function deleteNote (idx) {
        let delPost = confirm('Вы уверены, что хотите удалить запись?');
        delPost && dispatch(removeNoteAC(idx));
    }

    return(
        <div className="container">
            <div className="allNotes_container">
            <button onClick={() => navigate('/notes')} className="backNote-button">BACK</button>
                <div className="allNotes_content">
                    {
                        notes.map((post, idx) => {
                            return(
                            <div key={idx}>
                                <div className="note_post">
                                    <div className="note_content">
                                        <span className="note_content-text">{post.note}</span>
                                    </div>
                                    <div className="note_post-buttons">
                                        <span onClick={() => deleteNote(idx)} className="deleteRecipe-button">удалить заметку</span>
                                        <span onClick={() => editNote(post)} className="deleteRecipe-button">редактировать</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default AllNotes;