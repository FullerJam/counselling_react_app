import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
// import { isBefore } from 'date-fns'


import moment from "moment";

import apptIcon from "../assets/appt_icon.svg"


const StyledDate = styled.p`
    color:grey!important;
    @media (max-width: 580px){
        display:none;
    }
`
const StyledDate2 = styled.p`
    color:grey!important;
    display:none;
    @media only screen and (max-width: 579px){
        display:block!important;
    }
`
const StyledIconCircle = styled.div`
    height:50px;
    min-width:50px;
    margin-right:15px;
    background-color:#A8A8A8;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledApptInfo1 = styled.div`
    display:flex;
`

const StyledApptWrapper = styled.div`
            display:flex;
            justify-content:space-between;
            max-width:1000px;
            padding:20px;
            margin:0 auto;
            h6{
                color:grey;
                margin:5px 0;
                padding:0px;
            }
            p{
                font-size:13px;
                margin-top:4px;
                color:${({ theme, appointment }) => moment(appointment.date).isBefore(currentDate, 'day') ? theme.colors.red : theme.colors.green}
            }
    `
//Date check variables date-fns library
const currentDate = new Date()

function ApptTile(props) {

    const { appointment } = props

    return (
        <div>
            <StyledApptWrapper appointment={appointment}>
                <StyledApptInfo1>
                    <StyledIconCircle>
                        <img src={apptIcon} alt="appointment icon" />
                    </StyledIconCircle>
                    <div>
                        <h6>{moment(appointment.date).isBefore(currentDate, 'day') ? "Completed" : "Upcoming"} Appointment</h6>
                        <p>{appointment.date}</p>
                        <StyledDate2>
                            {moment(appointment.bookedOn.toDate()).fromNow()}
                        </StyledDate2>
                    </div>
                </StyledApptInfo1>
                <StyledDate>
                    {moment(appointment.bookedOn.toDate()).fromNow()}
                </StyledDate>
            </StyledApptWrapper>
        </div>

    )

}

export default ApptTile