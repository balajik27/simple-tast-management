import Balaji from './assets/balaji.jpg';
import { IoSendOutline } from "react-icons/io5";
import { useState , useRef } from 'react';
import {DisplayComments} from './displayComments'
export const Comments = ()=>{

    const [comments , setComments] = useState([]);
    const [inputComment , setInputComment] = useState('');
    const [editIndex , setEditIndex] = useState(null);
    const inputRef = useRef(null); 

    // console.log("inputComment = " , inputComment);
    const addComment = ()=>{
        // console.log("inputComment before store = " , inputComment);
        if (inputComment.trim() === '') {
            setInputComment('');
            inputRef.current.focus(); 
            return; 
        }

        if(editIndex !==null){
            setComments((prevComments)=> 
                prevComments.map((oldComment, id)=> id===editIndex? inputComment : oldComment)
            )
            setEditIndex(null);
        } else {
            setComments((prevComments)=>[inputComment , ...prevComments ]);
        }
        setInputComment('');
        inputRef.current.focus(); 
    }

    const editComment = (index)=>{
        setInputComment(comments[index]);
        setEditIndex(index);
        inputRef.current.focus();
    }
    const deleteComment = (index)=>{
        const newComments = comments.filter((item , id)=> id!==index)
        setComments(newComments);
        if (index === editIndex) {
            setEditIndex(null);
            setInputComment('');
          }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          addComment();
        }
      };
    // console.log("comments = " , comments);
    return(
        <>
        <h5 className="fw-bold text-muted "><em>Comments</em></h5>
        <DisplayComments comments={comments} deleteComment={deleteComment} editComment={editComment} />
        <div className="row">
            <div className="col-2 d-flex justify-content-center align-items-center">
                <div className="pt-2">
                    <img src={Balaji} className="profileImg rounded-circle border" alt="" />
                </div>
            </div>
            <div className="col-10">
                <div className="d-flex mt-3 border border-dark rounded-pill">
                    <input ref={inputRef} onKeyPress={handleKeyPress} placeholder="Write comment..." type="text" value={inputComment} onChange={(e)=>setInputComment(e.target.value)} className='py-2 border border-white rounded-pill btn outline-none text-start w-100' />
                    <div className="ps-4 pe-3 sendIconBox rounded-pill" onClick={addComment}>
                        <IoSendOutline  className='sendIcon h-100' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}