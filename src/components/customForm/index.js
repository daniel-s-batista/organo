import { useState } from 'react';
import './customForm.css';
import TextField from '../textField';
import Dropdown from '../dropdown';
import CustomButton from '../customButton';

const CustomForm = (props) => {
    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState(teams[0]);
    
    const formSubmit = (event) => {
        event.preventDefault();
        props.onMemberRegistered({
            name,
            role,
            image,
            team
        });
    }

    return (
        <section className="custom-form">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <form onSubmit={formSubmit}>
                <TextField label="Nome" 
                           id="name"
                           name="name"
                           placeholder="Digite seu nome"
                           value={name}
                           setter={(name) => setName(name)}
                           required={true} />
                <TextField label="Cargo"
                           id="role"
                           name="role"
                           placeholder="Digite seu cargo"
                           value={role}
                           setter={(role) => setRole(role)}
                           required={true} />
                <TextField label="Imagem"
                           id="image"
                           name="image"
                           placeholder="Informe o endereço da imagem"
                           value={image}
                           setter={(image) => setImage(image)}
                           required={true} />
                <Dropdown items={teams}
                          label="Times"
                          value={team}
                          setter={(team) => setTeam(team)}
                          required={true} />
                <CustomButton>Criar card</CustomButton>
            </form>
        </section>
    );
}

export default CustomForm;