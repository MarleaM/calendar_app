import React from "react";

const Event = (props) => {
    return(
        <td className={`Event ${props.color}`}> {/* Add space between 'Event' and props.color */}
            <h5>{props.event}</h5>
        </td>
    )
}

export default Event;