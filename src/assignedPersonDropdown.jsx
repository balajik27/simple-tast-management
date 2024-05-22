
import Balaji from './assets/balaji.jpg';
import Anna from './assets/Anna.png';
import Roman from './assets/Roman.png';
import PropTypes from 'prop-types';


const AssignedPersonDropdown = ({ assignedPerson, assignedImg, setEventDetails, eventDetails }) => {
  return (
    <div className="dropdown rounded-pill px-2 w-100">
      <button className="btn rounded-pill btn-white border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {assignedPerson ? (
          <>
            <img src={assignedImg} className="profileCommentImg rounded-circle" /> {assignedPerson}
          </>
        ) : (
          'Select person'
        )}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#" onClick={() => setEventDetails({ ...eventDetails, assignedPerson: 'Balaji', assignedImg: Balaji })}>
            <img src={Balaji} className="profileCommentImg rounded-circle" alt="" /> Balaji
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={() => setEventDetails({ ...eventDetails, assignedPerson: 'Anna', assignedImg: Anna })}>
            <img src={Anna} className="profileCommentImg rounded-circle" alt="" /> Anna
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={() => setEventDetails({ ...eventDetails, assignedPerson: 'Roman', assignedImg: Roman })}>
            <img src={Roman} className="profileCommentImg rounded-circle" alt="" /> Roman
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AssignedPersonDropdown;



AssignedPersonDropdown.propTypes = {
    assignedPerson: PropTypes.string.isRequired, 
    assignedImg: PropTypes.string.isRequired, 
    setEventDetails: PropTypes.func.isRequired,
    eventDetails: PropTypes.object.isRequired, // checks object
};