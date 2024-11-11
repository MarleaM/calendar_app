import React from "react";
import Event from './Event';

const Calendar = () => {
    return (
        <div>
            <table>

                <tbody>
                    <tr>
                        <td className="time" colSpan="2" style={{ textAlign: "center" }}>
                            <Event event='Fancy Dinner' color='green' />
                        </td>
                        <td className="time" colSpan="2" style={{ textAlign: "center" }}>
                            <Event event='Hello Dinner' color='green' />
                        </td>
                        <td className="time" colSpan="2" style={{ textAlign: "center" }}>
                            <Event event='Fancy Dinner' color='green' />
                        </td>
                        <td className="time" colSpan="2" style={{ textAlign: "center" }}>
                            <Event event='Fancy Dinner' color='green' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );   
}

export default Calendar;
