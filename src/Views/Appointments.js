import React, { useEffect, useState, useContext } from "react"
import useAuth from "../services/firebase/useAuth"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import moment from "moment";

import Button from "../Components/Button"
import tick from "../assets/tick.svg"
import apptIcon from "../assets/appt_icon.svg"

//context
import UserContext from "../config/user-context"

const StyledInfoCircle = styled.div`
    background-color: ${({ theme }) => theme.colors.pink};
    position:absolute;
    left:calc(50% - 63px);
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
    left:calc(50% - 46px);
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
    const user = useContext(UserContext) // wouldnt work with props undefined // breaks on page refresh, fixed with useLayoutEffect & if statement
    let pastAppts = []
    const [pastApptTotal, setPastApptTotal] = useState(0)
    const [appointments, setAppointments] = useState([])
    const { variants, readAppointments } = props
    //const userLocal = JSON.parse(localStorage.getItem('user')) // used local storage instead of useContext, and added else statement to useAuth to fix. Worked but if user logged out and then logged back in & redir to appts threw error

    useEffect(() => {
        // if(initialRender.current){ //prevents page from crashing but doesnt load 
        //     initialRender.current = false
        //     return
        // }
        const getAllAppointments = async () => {
            const allAppointments = await readAppointments(user)
            let appts = []
            allAppointments.forEach(appointment => appts.push({ ...appointment.data(), ...{ id: appointment.id } }))
            const date = new Date()
            pastAppts = appts.map(appointment => moment(appointment.date).isBefore(date, 'day'))
            setPastApptTotal(pastAppts.filter(Boolean).length)
            setAppointments(appts) 
            // console.log(appts)           
        }
        getAllAppointments()

    }, [useAuth, readAppointments, setAppointments, user.uid])

    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledContentWrapper>
                <p>Your Appointments</p>
            </StyledContentWrapper>
            <StyledBackground>
                <StyledInfoCircle>
                    <p>Total Booked <br />{appointments.length}</p>
                </StyledInfoCircle>
                <StyledImageWrapper>
                    <img src={tick} alt="reward tick" />
                    <p>Completed <br /> {pastApptTotal}</p>
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
                        <img src={apptIcon} alt="appt icon" />
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

ApptTile.propTypes = {
};
export default Appointments;