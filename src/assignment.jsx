
import { IoTrash } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import { useState } from "react";

import Checkbox from "./checkBox";
import AssignedPersonDropdown from "./assignedPersonDropdown";


export const Assignment = ()=>{
    const [eventDetails, setEventDetails] = useState({
        title: '',
        date: '',
        assignedPerson: '',
        assignedImg: '',
        note: '',
        status: true,
      });

      const toggleStatus = ()=>{
        setEventDetails((prevEventDetails)=>
        ({...eventDetails , status : !prevEventDetails.status})
        )
      }
    //   console.table(eventDetails);
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
                <Checkbox status={eventDetails.status} toggleStatus={toggleStatus} />
                <div className="d-flex gap-3">
                    <IoTrash  className="align-self-end defaultIconStyle" />
                    <IoClose  className="align-self-end checkIcon defaultIconStyle" />
                </div>
            </div>

            <input type="text" value={eventDetails.title} onChange={(e)=>setEventDetails({...eventDetails , title: e.target.value })} placeholder="Enter event title..." className="mb-4 mt-4 rounded-pill border  px-3 py-2 w-100 assignmentTitle fw-bold h4 "/>
            <input type="date" value={eventDetails.date} onChange={(e)=>setEventDetails({...eventDetails , date: e.target.value })} className="px-3 py-2 rounded-pill border  w-100" />


            <div className="d-flex w-100 gap-3 mt-3">
                <div className="d-flex justify-content-center align-items-center  gap-2 text-nowrap">
                    <IoPersonOutline className="defaultIconStyle" />
                    <span>Assign to :</span>
                </div>
                <AssignedPersonDropdown
                    assignedPerson={eventDetails.assignedPerson}
                    assignedImg={eventDetails.assignedImg}
                    setEventDetails={setEventDetails}
                    eventDetails={eventDetails}
                    />
            </div>
                
          
            <div className="d-flex w-100 gap-3 mt-3">
                <div className="d-flex justify-content-center align-items-center gap-2 text-nowrap">
                    <CiStickyNote className="defaultIconStyle" />
                    <span>Note :</span>
                </div>
                <div className="  px-2 w-100">
                    <textarea name="" className="rounded-3 p-2 w-100" onChange={(e)=>setEventDetails({...eventDetails , note : e.target.value})} id="" cols="0" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}