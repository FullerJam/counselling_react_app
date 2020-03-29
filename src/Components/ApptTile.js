import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

import apptIcon from "../assets/appt_icon.svg"

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
        color:${({ theme }) => theme.colors.green}
    }
`
const StyledDate = styled.p`
    color:grey!important;
    
`
const StyledIconCircle = styled.div`
    height:50px;
    width:50px;
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

function ApptTile(props) {

    return (
        <div>
            <StyledApptWrapper>
                <StyledApptInfo1>
                    <StyledIconCircle>
                        <img src={apptIcon} alt="appointment icon" />
                    </StyledIconCircle>
                    <div>
                        <h6>Completed Appointment</h6>
                        <p>Successful</p>
                    </div>
                </StyledApptInfo1>
                <StyledDate>
                    june 01, 2019
                </StyledDate>
            </StyledApptWrapper>
        </div>

    )

}

export default ApptTile