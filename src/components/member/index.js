import './Member.css';

const Member = ({name, role, image}) => {
    return (
        <div className="member">
            <div className="memberHeader">
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
