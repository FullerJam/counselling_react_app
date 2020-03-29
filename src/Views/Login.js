import React, { useState } from 'react'
import styled from 'styled-components'
import person from "../assets/boy.png"
import LoginForm from '../Components/LoginForm'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const StyledWrapper = styled.div`
    max-width:1000px;
    margin:20vh auto;
    text-align:center;
`

const StyledImg = styled.div`
    width:94px;
    height:94px;
    margin:0 auto;
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

function Login(props) {
    const { signInEmailUser, signInWithProvider } = props;
    const [error, setError] = useState();

    const handleSubmit = async data => {
        console.log("clicked");
        const { email, password } = data;

        try {
            const user = await signInEmailUser(email, password);
            console.log(user);
        } catch (error) {
            debugger;
            setError(error.message);
        }
    };

    const handleSocialLogin = provider => {
        signInWithProvider(provider);
    };


    return (
        <React.Fragment>
            <StyledWrapper>
                <StyledImg>
                    <img src={person} alt="person" />
                </StyledImg>
                <StyledH3>Use your social to sign in</StyledH3>
                <LoginForm
                    onSubmit={handleSubmit}
                    serverError={error}
                    buttonText={"LOGIN"}
                />
                <StyledLink to="/signup">
                    <h3>Not a member - Sign up now!</h3>
                </StyledLink>
            </StyledWrapper>
        </React.Fragment>
    )
}

Login.propTypes = {
    // signInEmailUser: PropTypes.func.isRequired,
    // signInWithProvider: PropTypes.func.isRequired
}

export default Login
