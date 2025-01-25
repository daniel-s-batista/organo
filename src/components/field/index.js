import './Field.css';

const Field = ({ id, name, label, value, placeholder, setter, required, type = "text" }) => {
    const saveValue = (event) => {
        setter(event.target.value);
    }

    return (
        <div className="field">
            <label htmlFor={id}>{label}</label>
            <input value={value} onChange={saveValue} type={type} id={id} name={name} placeholder={placeholder} required={required} />
        </div>
    );
}

export default Field;
