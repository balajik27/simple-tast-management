import Balaji from './assets/balaji.jpg'

import { IoTrash } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

import PropTypes from 'prop-types';

export const DisplayComments = ({comments , deleteComment , editComment})=>{
    return(
        <div className='commentBox'>

            {comments.map((item , index)=>(
                <div className="row"  key={index}>
                    <div className="col-2">
                        <div className="pt-2">
                            <img src={Balaji} className="profileCommentImg rounded-circle border" alt="" />
                        </div>
                    </div>
                    <div className="col-10 mt-2">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h6 className='fw-bold m-0'>Balaji</h6>
                                <p className=''>{item}</p> 
                            </div>
                               <div className="d-flex">
                                    <div className="d-flex align-self-start p-2 rounded-circle deleteIconBox" onClick={()=>editComment(index)}>
                                        <CiEdit className="align-self-end defaultIconStyle" />
                                    </div>
                                    <div className="d-flex align-self-start p-2 rounded-circle deleteIconBox" onClick={()=>deleteComment(index)}>
                                        <IoTrash  className="align-self-end defaultIconStyle"  />
                                    </div>
                               </div>
                        </div>
                    </div>
                </div>
                 
            ))}
        </div>
    )
}

DisplayComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming comments is array of strings.
    deleteComment: PropTypes.func.isRequired, // this should be function
    editComment: PropTypes.func.isRequired,
};