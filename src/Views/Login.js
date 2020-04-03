import React, { useState } from 'react'
import styled from 'styled-components'
import person from "../assets/boy.png"
import LoginForm from '../Components/LoginForm'
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"



const StyledWrapper = styled.div`
    max-width:1000px;
    margin:10vh auto;
    text-align:center;
`

const StyledImg = styled.div`
    width:94px;
    height:94px;
    margin:0 auto;
`

const StyledH3 = styled.h3`
    color: ${({ theme }) => theme.colors.pink};
`

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

function Login(props) {
    const { signInEmailUser, signInWithProvider, variants } = props;
    const [error, setError] = useState();

    const handleSubmit = async data => {
        console.log(data);
        const { email, password } = data;

        try {
            const user = await signInEmailUser(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSocialLogin = provider => {
        signInWithProvider(provider);
    };


    return (

        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledImg>
                    <img src={person} alt="person" />
                </StyledImg>
                <StyledH3>Use your social to sign in</StyledH3>
                <LoginForm
                    onSubmit={handleSubmit}
                    serverError={error}
                    buttonText={"LOGIN"}
                    onSocialLogin={handleSocialLogin}
                />
                <StyledLink to="/sign_up">
                    <h3>Not a member - Sign up now!</h3>
                </StyledLink>
            </StyledWrapper>
        </motion.div>

    )
}

Login.propTypes = {
    // signInEmailUser: PropTypes.func.isRequired,
    // signInWithProvider: PropTypes.func.isRequired
}

export default Login
