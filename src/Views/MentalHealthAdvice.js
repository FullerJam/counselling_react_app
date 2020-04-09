import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import signupimg from "../assets/signup.png"

const StyledWrapper = styled.div`
    max-width:1000px;
    margin:10vh auto;
    text-align:center;
`

const StyledImg = styled.div`

    margin:0 auto;
    display:flex;
    justify-content:center;
`

const StyledH3 = styled.h3`
    color: ${({ theme }) => theme.colors.pink};
  `;

const StyledLink = styled(Link)`
        text-align: center;
        text-decoration: none;
        h3{
            color:${({ theme }) => theme.colors.pink};
        }
        h3:hover{
            color:#e06588;
        }
    `

function MentalHealthAdvice() {
  
    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledImg>
                    <img src={signupimg} alt="people_waving" />
                </StyledImg>
                <StyledH3>Sign up today with your social account</StyledH3>
                
                <StyledLink to="/login">
                    <h3>Already a member? - Login</h3>
                </StyledLink>
            </StyledWrapper>
        </motion.div>

    )
}

SignUp.propTypes = {
    createEmailUser: PropTypes.func.isRequired
}

export default SignUp

