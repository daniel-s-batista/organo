import './customForm.css';
import TextField from '../textField';
import Dropdown from '../dropdown';
import CustomButton from '../customButton';

const CustomForm = () => {
    const teams = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const formSubmit = (event) => {
        event.preventDefault();
        console.log("OK");
    }

    return (
        <section className="custom-form">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <form onSubmit={formSubmit}>
                <TextField label="Nome" id="name" name="name" placeholder="Digite seu nome" required={true} />
                <TextField label="Cargo" id="role" name="role" placeholder="Digite seu cargo" required={true} />
                <TextField label="Imagem" id="image" name="image" placeholder="Informe o endereço da imagem" required={true} />
                <Dropdown items={teams} label="Times" required={true} />
                <CustomButton>Criar card</CustomButton>
            </form>
        </section>
    );
}

export default CustomForm;