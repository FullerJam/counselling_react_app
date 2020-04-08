import React, { useEffect, useState, useContext } from "react"
import useAuth from "../services/firebase/useAuth"

import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import ApptTile from "../Components/ApptTile"
import Button from "../Components/Button"
import tick from "../assets/tick.svg"

//context
import UserContext from "../config/user-context"


const StyledInfoCircle = styled.div`
    background-color: ${({ theme }) => theme.colors.pink};
    position:absolute;
    left:calc(50% - 59px);
    top:250px;
    text-align:center;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
      line-height: 1.6;
      color:white;
      font-weight:bold;
    }
`

const StyledContentWrapper = styled.div`
    max-width:1000px;
    border-radius:5px;
    margin: 0 auto;
    p{
      margin:40px 0px 40px 25px;
      line-height: 1.6;
      color:grey;
      font-size:20px;
    }
`

const StyledBackground = styled.div`
    width: 100%;
    height: 300px;
    background-color:${({ theme }) => theme.colors.lightPurple};
    border-radius:100% 100% 0 0;
    margin:150px auto 40px;
    text-align:center;
    max-width:1000px;
`

const StyledImageWrapper = styled.div`
    position: absolute;
    left:calc(50% - 44px);
    top:428px;
    img{
        max-height:40px;
        max-width:40px;
    }
    p{
        line-height: 1.6;
        margin:0;
        color:white;
    }
`

const StyledAppointmentsWrap = styled.div`
    max-width:1000px;
    margin:0 auto 25px;
`


function Appointments(props) {
    
    const [appointments, setAppointments] = useState([])
    const { variants, readAppointments } = props
    //const userLocal = JSON.parse(localStorage.getItem('user')) // used local storage instead of useContext, and added else statement to useAuth to fix. Worked but if user logged out and then logged back in & redir to appts threw error
    const user = useContext(UserContext) // wouldnt work with props undefined // breaks on page refresh, fixed with useLayoutEffect & if statement

    useEffect(() => {
        // if(initialRender.current){ //prevents page from crashing but doesnt load 
        //     initialRender.current = false
        //     return
        // }
        const getAllAppointments = async () => {
            const allAppointments = await readAppointments(user)
            let appts = []
            allAppointments.forEach(appointment => appts.push({ ...appointment.data(), ...{ id: appointment.id } }))
            setAppointments(appts)
        }
        getAllAppointments()

    }, [useAuth, readAppointments, setAppointments, user])

    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledContentWrapper>
                <p>Your Appointments</p>
            </StyledContentWrapper>
            <StyledBackground>
                <StyledInfoCircle>
                    <p>Total Booked <br />4</p>
                </StyledInfoCircle>
                <StyledImageWrapper>
                    <img src={tick} alt="reward tick" />
                    <p>Completed <br /> 02</p>
                </StyledImageWrapper>
                <Link to="/select_date">
                    <Button text={"BOOK AN APPOINTMENT"} m={"260px 0px 0px"} />
                </Link>
            </StyledBackground>
            <StyledAppointmentsWrap>
                {
                    appointments.map(appt => <ApptTile appointment={appt} />)
                }
            </StyledAppointmentsWrap>
        </motion.div>
    );
}

Appointments.propTypes = {
};

export default Appointments;