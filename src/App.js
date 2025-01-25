import { useState } from 'react';
import Banner from './components/banner';
import CustomForm from './components/customForm';
import Team from './components/team';
import CustomFooter from './components/customFooter';
import { v4 as uuid } from 'uuid'; 

function App() {
    const [teams, setTeams] = useState([
        {
            id: uuid(),
            name: 'Programação',
            color: '#57C278'
        },
        {
            id: uuid(),
            name: 'Front-End',
            color: '#82CFFA'
        },
        {
            id: uuid(),
            name: 'Data Science',
            color: '#A6D157'
        },
        {
            id: uuid(),
            name: 'Devops',
            color: '#E06B69'
        },
        {
            id: uuid(),
            name: 'UX e Design',
            color: '#DB6EBF'
        },
        {
            id: uuid(),
            name: 'Mobile',
            color: '#FFBA05'
        },
        {
            id: uuid(),
            name: 'Inovação e Gestão',
            color: '#FF8A29'
        },
    ]);

    const [members, setMembers] = useState([]);

    const addMember = (member) => {
        setMembers([...members, member]);
    }

    function deleteMember(id) {
        setMembers(members.filter((member) => (member.id !== id)))
    }

    const addTeam = (team) => {
        setTeams([...teams, team]);
    }

    function setTeamColor(color, id) {
        setTeams(teams.map((team) => {
            if (team.id === id) {
                team.color = color;
            }
            return team;
        }));
    }

    function toggleFavorite(id) {
        setMembers(members.map((member) => {
            if (member.id === id) {
                member.favorite = !member.favorite;
            }
            return member;
        }))
    }

    return (
        <div className="App">
            <Banner />

            <CustomForm teams={teams.map((team) => team.name)}
                        onMemberRegistered={(member) => addMember(member)}
                        onTeamRegistered={(team) => addTeam(team)} />
            
            {teams.map((team) => (<Team key={team.id}
                                        id={team.id}
                                        name={team.name}
                                        color={team.color}
                                        members={members.filter((member) => member.team === team.name)}
                                        onDeleteMember={deleteMember}
                                        toggleFavorite={toggleFavorite}
                                        changeColor={setTeamColor} />))}

            <CustomFooter />
        </div>
    );
}

export default App;
