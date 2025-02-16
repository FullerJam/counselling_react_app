import React, { useState, useContext } from 'react'
import { motion } from "framer-motion"
import PropTypes from 'prop-types'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from "styled-components"
import Button from "../Components/Button"
import moment from "moment";
//context
import UserContext from "../config/user-context"

import theme from "../config/theme.js"
const uuidv1 = require('uuid/v1');

const StyledWrapper = styled.div`
    width:90vw;
    margin:10vh auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    p{
        text-align:center;
    }
`

const StyledH3 = styled.h3`
    color:${theme.colors.pink};
    margin-bottom:40px;
`

const calendarStyle = {
    boxShadow: '3px 3px 10px #888',
    marginBottom: '40px'
}

function DateSelect(props) {
    const user = useContext(UserContext)
    const [date, setDate] = useState(moment().add(1, 'days').toDate())
    const { variants, createAppointment } = props


    const onChange = date => {
        setDate(date)
    }

    const handleSubmit = async appointmentDate => {
        const formattedDate = appointmentDate.toISOString().split("T")
        const appt = {
            bookedOn: new Date(),
            date: formattedDate[0],
            timeStamp: appointmentDate,
            userId: user.uid,
            userName: user.displayName || user.email
        }
        try {
            await createAppointment(appt)
        } catch (error) {
            alert(error)
            console.log(error);
        }
        window.location = "/appt_confirmation"
    }

    const reformattedDate = date.toISOString().split("T")[0].split("-")

    return (

        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledH3>
                    Choose your appointment date
            </StyledH3>
                <p>You will be allocated a time slot so please make sure you have no <br /> commitments on the day of your booking</p>
                <div style={calendarStyle}> {/*wouldnt work directly on Calendar*/}
                    <motion.div initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        >
                        <Calendar minDate={moment().add(1, 'days').toDate()} onChange={onChange}/>
                    </motion.div>
                </div>
                <p style={{ marginBottom:"0"}}>Appointment date set to </p>
                <p style={{ color: "white", fontWeight: "bold", borderRadius: "3px", backgroundColor: "#adacac", padding: "5px", margin: "0 0 15px" }}>{reformattedDate[2] + "/" + reformattedDate[1] + "/" + reformattedDate[0]}</p>
                <Button text={"SELECT DATE"} onClick={e => handleSubmit(date)} /> {/**handleSubmit() <- like this will run immediately in react */}

            </StyledWrapper>
        </motion.div>
    )
}

DateSelect.defaultProps = {
    variants: PropTypes.object.isRequired,
    createAppointment: PropTypes.func.isRequired
};

export default DateSelect

//rcfp 

