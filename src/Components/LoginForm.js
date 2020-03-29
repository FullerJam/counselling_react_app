import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "../Components/Button"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { useForm } from 'react-hook-form'
import { useLocation } from "react-router-dom";

import * as yup from 'yup'

import emailIcon from "../assets/email.png"
import passwordIcon from "../assets/password.png"

const StyledH3 = styled.h4`
    color: ${({ theme }) => theme.colors.pink};
    margin-bottom:10px;
  `;

const StyledError = styled.div`
  p{
    color:red;
    padding:10px 0;
    margin:0px;
    text-align:left;
  }
`

const StyledSocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin:0 auto;
    max-width:120px;
    a: {
      cursor: pointer;
    }
  `

const StyledFormWrap = styled.div`
  max-width:480px;
  margin:0 auto 30px;
  display:flex;
  justify-content:center;
  input{
    max-width:480px;
    min-width:300px;
    background-repeat:no-repeat;
    float:left;
    padding-left:22px;
    background-position:97% center;
    font-size:14px!important;
  }
  input::placeholder {
    font-size:14px;
  }
`

const StyledInputImg = styled.div`
  input{
    background-image:url(${emailIcon});
    font-size:14px;
  }
`
const StyledInputImg2 = styled.div`
  input{
    background-image:url(${passwordIcon});
    font-size:14px;
  }
`



function LoginForm(props) {

  const { buttonText, onSubmit, serverError, onSocialLogin } = props
  const [displayEmail, setDisplayEmail] = useState(false)

  const loginFormSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter a email'),
    password: yup.string().required('Please enter a password').min(8, 'Password must be minimum 8 characters long')
  })


  const { register, handleSubmit, errors } = useForm({ validationSchema: loginFormSchema })


  const handleClick = e => {
    console.log("running")
    e.preventDefault();
    setDisplayEmail(!displayEmail)
  }

  const handleDataSubmit = data => { onSubmit(data) }
  const handleSocialClick = provider => {
    onSocialLogin(provider)
  }

  let firstButtonText

  if (useLocation().pathname == "/sign_up") {
    firstButtonText = "Sign up"
  } else {
    firstButtonText = "Sign in"
  }

  return (
    <React.Fragment>
      <StyledSocialIcons>
        <SocialIcon onClick={() => handleSocialClick("facebook")} network="facebook" />
        <SocialIcon onClick={() => handleSocialClick("google")} network="google" />
      </StyledSocialIcons>
      <StyledH3>Or use your email to </StyledH3>



      {!displayEmail && (<Button onClick={handleClick} m={"10px"} text={firstButtonText} />)}


      {displayEmail && (
            <StyledFormWrap>
              <form onSubmit={handleSubmit(handleDataSubmit)}>
                <StyledInputImg>
                  <input placeholder="Email" type="text" name="email" ref={register} />
                </StyledInputImg>
                <StyledError>
                  <p>{errors.email && errors.email.message}</p>
                </StyledError>
                <StyledInputImg2>
                  <input placeholder="Password" type="password" name="password" ref={register} />
                </StyledInputImg2>
                <StyledError>
                  <p>{errors.password && errors.password.message}</p>
                </StyledError> <br />
                <Button text={buttonText} />
                <StyledError>
                  {serverError}
                </StyledError>
              </form>
            </StyledFormWrap>
      )}

    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
  // onSubmit: PropTypes.func.isRequired,
  // onSocialLogin: PropTypes.func.isRequired,
  error: PropTypes.string
};

LoginForm.defaultProps = {
  buttonText: "JOIN",
  serverError: '',

};

export default LoginForm;
