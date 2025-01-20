import { useState } from 'react';
import './customForm.css';
import TextField from '../textField';
import Dropdown from '../dropdown';
import CustomButton from '../customButton';
import { v4 as uuid } from 'uuid'; 

const CustomForm = (props) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState(props.teams[0]);
    
    const formSubmitMember = (event) => {
        event.preventDefault();
        props.onMemberRegistered({
            name: name,
            role: role,
            image: image,
            team: team,
            id: uuid()
        });
        setName("");
        setRole("");
        setImage("");
    }

    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");

    const formSubmitTeam = (event) => {
        event.preventDefault();
        props.onTeamRegistered({
            name: teamName,
            color: teamColor,
            id: uuid()
        });
        setTeamName("");
        setTeamColor("");
    }

    return (
        <section className="custom-form">
            <form onSubmit={formSubmitMember}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
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
                <Dropdown items={props.teams}
                          label="Times"
                          value={team}
                          setter={(team) => setTeam(team)}
                          required={true} />
                <CustomButton>Criar card</CustomButton>
            </form>

            <form onSubmit={formSubmitTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextField label="Nome" 
                           id="name"
                           name="name"
                           placeholder="Digite o nome do time"
                           value={teamName}
                           setter={(teamName) => setTeamName(teamName)}
                           required={true} />
                <TextField label="Cor"
                           id="color"
                           name="color"
                           placeholder="Digite a cor do time"
                           value={teamColor}
                           setter={(teamColor) => setTeamColor(teamColor)}
                           required={true} />
                <CustomButton>Criar time</CustomButton>
            </form>
        </section>
    );
}

export default CustomForm;