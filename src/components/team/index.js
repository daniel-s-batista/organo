import Member from '../member';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    const css = {
        borderColor: props.color,
        backgroundColor: hexToRgba(props.color, "0.25")
    }

    return (
        (props.members.length > 0)
        ?
        <section className="team" style={css}>
            <input value={props.color} onChange={(event) => props.changeColor(event.target.value, props.id)} type='color' className='input-color' />
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className="memberGroup">
                {props.members.map((member) => {
                    return (
                        <Member key={member.name}
                                id={member.id}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                team={member.team}
                                favorite={member.favorite}
                                bgcolor={props.color}
                                onDeleteMember={props.onDeleteMember}
                                toggleFavorite={props.toggleFavorite} />
                    );
                })}
            </div>
        </section>
        :
        ""
    );
}

export default Team;