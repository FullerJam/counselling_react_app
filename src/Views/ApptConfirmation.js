import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Button from "../Components/Button"
import chatImage from "../assets/chat_.svg"

const ContentWrapper = styled.div`
  width:100%;
  padding:2%;
  margin:10vh auto;
  max-width:1000px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  text-align:center;
  p{
      margin-top:40px
  }
  @media(max-width:1020px){
    max-width:560px;
  }
  @media(max-width:580px){
    max-width:300px;
  }
`

const StyledImg = styled.div`
    img{
        
    }
`

const StyledH3 = styled.h3`
    color: ${({ theme }) => theme.colors.pink};
    margin-bottom:40px;
`



function ApptConfirmation(props) {

    const { variants } = props
    return (
        <React.Fragment>
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
                <ContentWrapper>
                    <StyledImg>
                        <img src={chatImage} alt="person" />
                    </StyledImg>
                    <StyledH3>You’ve confirmed your booking! <br /> Do you need to speak to anyone Urgently??</StyledH3>

                    <Link to="/chat">
                        <Button text={"CHAT"} />
                    </Link>
                    <p>Support is available for those struggling with emotional well-being whatever time of day.  </p>
                </ContentWrapper>
            </motion.div>
        </React.Fragment>
    )
}

ApptConfirmation.propTypes = {

}

export default ApptConfirmation

