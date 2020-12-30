import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.program.links.mission_patch_small} alt="program"/>
            <div className="card-body">
                <h4 className="card-title">{`${props.program.mission_name} # ${props.program.flight_number}`}</h4>
                <strong>Mission Ids: </strong>
                <ul><li>{props.program.mission_id[0]}</li></ul>
                <p><strong>Launch Year :</strong>{` ${props.program.launch_year}`}</p>
                <p><strong>Successful Launch :</strong>{` ${JSON.stringify(props.program.launch_success)}`}</p>
            </div>
        </div>
    )
}

export default Card;