import Member from '../member';
import './Team.css';

const Team = (props) => {
    const css = {
        backgroundColor: props.secondaryColor,
        borderColor: props.primaryColor
    }

    return (
        (props.members.length > 0)
        ?
        <section className="team" style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className="memberGroup">
                {props.members.map((member) => {
                    return (
                        <Member key={member.name}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                team={member.team}
                                bgcolor={props.primaryColor}
                                onDeleteMember={props.onDeleteMember} />
                    );
                })}
            </div>
        </section>
        :
        ""
    );
}

export default Team;