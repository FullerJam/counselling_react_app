import React from 'react'
import MenuTile from "../Components/MenuTile"
import calendarIcon from "../assets/calendar_icon.svg"
import mentalHealthIcon from "../assets/mental_health_icon.svg"
import requestIcon from "../assets/request_icon.svg"
import urgentChatIcon from "../assets/urgent_chat_icon.svg"

function Dash() {
    return (

        <div>
            <MenuTile>
                <img src={calendarIcon} alt="" />
                <h4>APPOINTMENTS</h4>
            </MenuTile>
            <MenuTile color={"#1E62A1"}>
                <img src={mentalHealthIcon} alt="" />
                <h4>MENTAL HEALTH ADVICE</h4>
            </MenuTile>
            <MenuTile color={"#FFC43D"}>
                <img src={requestIcon} alt="" />
                <h4>URGENT CHAT</h4>
            </MenuTile>
            <MenuTile color={"#FD749B"}>
                <img src={urgentChatIcon} alt="" />
                <h4>REQUEST FOR LETTER</h4>
            </MenuTile>
        </div>

    )
}

export default Dash