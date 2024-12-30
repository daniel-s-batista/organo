import './TextField.css';

const TextField = (props) => {
    return (
        <div className="text-field">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} name={props.name} placeholder={props.placeholder} required={props.required} />
        </div>
    );
}

export default TextField;
