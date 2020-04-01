import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import PropTypes from 'prop-types'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from "styled-components"
import Button from "../Components/Button"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import moment from "moment";


import theme from "../config/theme.js"

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

    const [date, setDate] = useState(new Date())
    const { variants, user, createAppointment, history } = props

    // const dateSelectSchema = yup.object().shape({
    //     bookedOn: yup.date().required(""),
    //     date: yup.date()
    //     .min(yup.ref("bookedOn"), "It is not possible to book the current date / past date, please book a future appointment")
    //     .required("Please select a date from the calender above"),
    //     userId: yup.string().required("Something when wrong, you dont have an asigned user ID"),
    //     userName: yup.string().required("Something when wrong, you dont have an username or email")
    // })
    console.log("current day" + new Date())
    console.log("tomorrow" + moment().add(1, 'days').toString())
    const onChange = date => {
        setDate(date)
        console.log(date)
    }

    const handleSubmit = async appointmentDate => {
        const formattedDate = appointmentDate.toISOString().split("T")
        const appt = {
            bookedOn: new Date(),
            date: formattedDate[0],
            userId:user.uid,
            userName: user.displayName || user.email
        }
        try {
            await createAppointment(appt)
            history.push("/appt_confirmation")
        } catch(error) {
            console.log(error);
        }
    }



    return (

        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledH3>
                    Choose your appointment date
            </StyledH3>
                <p>You will be allocated a time slot so please make sure you have no <br /> commitments on the day of your booking</p>
                <div style={calendarStyle}> {/*wouldnt work directly on Calendar*/}
                    <motion.div initial={{ scale: 0.5 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 90
                        }}>
                        <Calendar minDate={moment().add(1, 'days').format()}onChange={onChange} />
                    </motion.div>
                </div>
                <Button text={"SELECT DATE"} onClick={e => handleSubmit(date)} /> {/**handleSubmit() <- like this will run immediately in react */}
            </StyledWrapper>
        </motion.div>
    )
}

DateSelect.propTypes = {

}

export default DateSelect

//rcfp

