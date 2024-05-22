
import { IoCheckmarkCircleOutline, IoCheckmarkCircleSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Checkbox = ({ status, toggleStatus }) => {
  return (
    <div className="checkBox d-flex p-2 rounded-circle" onClick={toggleStatus}>
      {status ? <IoCheckmarkCircleOutline className="checkIcon defaultIconStyle" /> : <IoCheckmarkCircleSharp className="checkIcon defaultIconStyle" />}
    </div>
  );
};

export default Checkbox;


Checkbox.propTypes = {
    status: PropTypes.bool.isRequired, 
    toggleStatus: PropTypes.func.isRequired,
};