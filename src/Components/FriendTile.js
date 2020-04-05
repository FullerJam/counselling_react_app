import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import avatarPlaceholder from "../assets/avatar_placeholder.png"

import moment from "moment";

import avatarIcon from "../assets/avatar_placeholder.png"


const StyledIconCircle = styled.div`
    height:25px;
    width:25px;
    margin-right:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
    border-radius:50%;
    height:40px;
    width:40px;
    }
`


const StyledApptWrapper = styled.div`
    display:flex;
    width:100%;
    margin-left:20px;
    h6{
        color:grey;
        margin:5px 0;
        padding:0px;
    }
    
`
//Date check variables date-fns library
const currentDate = new Date()

function FriendTile(props) {

    // const { getUsers } = props

    return (
        <div>
            <StyledApptWrapper>
                <StyledIconCircle>
                    <img src={avatarIcon} alt="appt icon" />
                </StyledIconCircle>
                <h6>Username</h6>
            </StyledApptWrapper>
        </div>

    )

}

export default FriendTile