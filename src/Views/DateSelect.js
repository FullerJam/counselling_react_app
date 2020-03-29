import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from "styled-components"
import Button from "../Components/Button"


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

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        console.log(date);

    }

    return (
        <React.Fragment>
            <StyledWrapper>
            <StyledH3>
                Choose your appointment date
            </StyledH3>
            <p>You will be allocated a time slot so please make sure you have no <br/> commitments on the day of your booking</p>
                <div style={calendarStyle}> {/*wouldnt work directly on Calendar*/}
                    <Calendar onChange={onChange} />
                </div>
                <Button text={"SELECT DATE"} />
            </StyledWrapper>
        </React.Fragment>
    )
}

DateSelect.propTypes = {

}

export default DateSelect

//rcfp

