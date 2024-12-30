import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map((item) => {
                    return (
                        <option key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default Dropdown;