import './Dropdown.css';

const Dropdown = (props) => {
    const saveValue = (event) => {
        props.setter(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={saveValue} required={props.required}  defaultValue={""}>
                <option value=""></option>
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
