import './Member.css';
import { IoIosCloseCircle } from "react-icons/io";

const Member = ({id, name, role, image, bgcolor, onDeleteMember}) => {
    return (
        <div className="member">
            <IoIosCloseCircle size={24} className="delete" onClick={() => onDeleteMember(id)} />
            <div className="memberHeader" style={{ backgroundColor: bgcolor }}>
                <img src={image} alt={name} />
            </div>
            <div className="memberBody">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default Member;
