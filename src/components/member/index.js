import './Member.css';
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const Member = ({id, name, role, image, bgcolor, onDeleteMember, favorite, toggleFavorite}) => {
    const propsFavoriteIcon = {
        size: 25,
        onClick: () => toggleFavorite(id)
    }

    return (
        <div className="member">
            <IoIosCloseCircle size={24} className="delete" onClick={() => onDeleteMember(id)} />
            <div className="memberHeader" style={{ backgroundColor: bgcolor }}>
                <img src={image} alt={name} />
            </div>
            <div className="memberBody">
                <h4>{name}</h4>
                <h5>{role}</h5>
                <div className="favoriteButton">
                {
                    (favorite)
                    ? 
                    <FaHeart {...propsFavoriteIcon} color='#F00' />
                    :
                    <FaRegHeart {...propsFavoriteIcon} color='#700' />
                }
                </div>
            </div>
        </div>
    );
}

export default Member;
