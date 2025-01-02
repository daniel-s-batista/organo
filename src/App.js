import { useState } from 'react';
import Banner from './components/banner';
import CustomForm from './components/customForm';

function App() {
    const [members, setMembers] = useState([]);

    const addMember = (member) => {
        setMembers([...members], member);
    }

    return (
        <div className="App">
            <Banner />
            <CustomForm onMemberRegistered={(member) => addMember(member)} />
        </div>
    );
}

export default App;
