import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { pushPostAC } from "../store/postReducer";
import { screensavers } from "../data/screensavers";

function CreatePost () {
    const navigate = useNavigate();
    const { recipes } = useSelector(state => state.pos);
    const [newPost, setNewPost] = useState({
        image: '',
        title: '',
        stage: '',
        blog: ''
    });
    const [choosePage, setChoosePage] = useState(false);
    const [idx, setIdx] = useState(0);

    const dispatch = useDispatch();

    function chooseAvatar (e) {
        e.preventDefault();
        setChoosePage(true);
    }

    function toBack(e) {
        e.preventDefault();
        if (idx === 0) {
            setIdx(11);
        } else {
            setIdx((prev) => {
                prev = prev - 1;
                return prev;
            }
            )
        }
    }

    function toNext(e) {
        e.preventDefault();
        if (idx === 11) {
            setIdx(0);
        } else {
            setIdx((prev) => {
                prev = prev + 1;
                return prev;
            }
            )
        }
    }

    function closedChoose (e) {
        e.preventDefault();
        setChoosePage(false);
    }

    function thisAvatar(e) {
        e.preventDefault();
        setChoosePage(false);
        setNewPost((prev) => {
            let temp = {...prev};
            temp.image = screensavers[idx].image;
            return temp;
        })
    }

    function sendPost (e) {
        e.preventDefault();
        if (newPost.title === '' || newPost.stage === '' || newPost.blog === '') {
            alert('Заполнение всех полей в форме обязательно! Пожалуйста, заполните все поля и попробуйте ещё раз!');
        } else if (newPost.image === '') {
            alert('Пожалуйста, выберите заставку для своего рецепта!');
        } else {
            dispatch(pushPostAC({...newPost, id: recipes.length + 1}));
            setNewPost((prev) => {
                let temp = {...prev};
                temp.image = '';
                temp.title = '';
                temp.stage = '';
                temp.blog = '';
                return temp;
            })
            let beginCreate = confirm('Ваш рецепт успешно размещён в вашем блоге! Хотите добавить ещё один?');
            if (!beginCreate) {
                navigate('/blog');
            }
        }
    }

    function changeInput(e) {
        const name = e.target.name;
        setNewPost(prev => ({...prev, [name]: e.target.value}));
    }

    return(
        <div className="container">
            <div className="create-post">
                <p className="create-post_title">Заполните пожалуйста форму, чтобы разместить в вашем блоге новый рецепт!</p>
                <form className="createForm">
                    <input disabled={choosePage && 'disabled'} className="title-input" onChange={(e) => changeInput(e)} name="title" placeholder="Название рецепта" type="text" value={newPost.title}/>
                    <textarea disabled={choosePage && 'disabled'} className="stage-input" onChange={(e) => changeInput(e)} name="stage" placeholder="Краткое описание" type="text" value={newPost.stage}/>
                    <textarea disabled={choosePage && 'disabled'} className="blog-input" onChange={(e) => changeInput(e)} name="blog" placeholder="Ваш рецепт" type="text" value={newPost.blog}/>
                    <button disabled={choosePage && 'disabled'} className="choose_active-button" onClick={chooseAvatar}>ВЫБРАТЬ ЗАСТАВКУ</button>
                    <div className={choosePage ? `choosepage-content` : `none`}>
                        {
                            <div className="choosepage-img_content">
                                <div className="left-button_container"><button className="left-button" onClick={toBack}><img src='/images/left.svg'/></button></div>
                                <img className="choosepage-img" src={screensavers[idx].image} alt="choosepage"/>
                                <div className="right-button_container"><button className="right-button" onClick={toNext}><img src='/images/right.svg'/></button></div>
                                <div className="close-button-block">
                                    <button className="close-button" onClick={closedChoose}><img src="/images/close.svg" alt="close"/></button>
                                </div>
                                <div className="choose-button_block">
                                    <button className="choose-button" onClick={thisAvatar}>ВЫБРАТЬ</button>
                                </div>
                            </div>
                        }
                    </div>
                    <button disabled={choosePage && 'disabled'} className="save-button" onClick={sendPost}>СОХРАНИТЬ!</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;