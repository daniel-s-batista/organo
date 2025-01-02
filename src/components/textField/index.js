import './TextField.css';

const TextField = (props) => {
    const saveValue = (event) => {
        props.setter(event.target.value);
    }

    return (
        <div className="text-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.value} onChange={saveValue} type="text" id={props.id} name={props.name} placeholder={props.placeholder} required={props.required} />
        </div>
    );
}

export default TextField;
