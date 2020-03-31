import React from "react"
import MenuTile from "../Components/MenuTile"
import styled from "styled-components"
import theme from "../config/theme.js"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//icons
import calendarIcon from "../assets/calendar_icon.svg"
import mentalHealthIcon from "../assets/mental_health_icon.svg"
import requestIcon from "../assets/request_icon.svg"
import urgentChatIcon from "../assets/urgent_chat_icon.svg"

const ImgContainer = styled.div`
margin-top:10px;
    img{
        width:70px;
    }
`
const StyledGreeting = styled.h4`
  font-family:${theme.typography.fontFamily};
  color:${theme.colors.pink};
  margin:40px 0px 8px;
`
const ContentWrapper = styled.div`
  max-width:344.56px;
  border-radius:5px;
  margin: 0 auto;
  padding:0 10px;
  p{
    margin:10px 0px 40px;
    line-height: 1.6;
  }
`
const motionStyle = {
    maxWidth:"480px",
    margin:"0 auto"
}



function NavDash(props) {
    const { variants } = props
    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <ContentWrapper>
                <StyledGreeting>
                    Hi, Username
                </StyledGreeting>
                <p>Welcome back! <br /> Choose from one of the options below</p>
            </ContentWrapper>

            <Link to="/appointments" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.05 }} style={motionStyle}>
                    <MenuTile>
                        <ImgContainer>
                            <img src={calendarIcon} alt="calendar icon" />
                        </ImgContainer>
                        <h4>APPOINTMENTS</h4>
                    </MenuTile>
                </motion.div>
            </Link>

            {/* <Link to="/advice" style={{ textDecoration: 'none' }}> */}
            <motion.div whileHover={{ scale: 1.05 }} style={motionStyle}>
                <MenuTile color={"#1E62A1"} >
                    <ImgContainer>
                        <img src={mentalHealthIcon} alt="mental health icon" />
                    </ImgContainer>
                    <h4>MENTAL HEALTH ADVICE</h4>
                </MenuTile>
            </motion.div>
            {/* </Link> */}

            {/* <Link to="/chat" style={{ textDecoration: 'none' }}> */}
            <motion.div whileHover={{ scale: 1.05 }} style={motionStyle}>
                <MenuTile color={"#FFC43D"} >
                    <ImgContainer>
                        <img src={urgentChatIcon} alt="chat icon" />
                    </ImgContainer>
                    <h4>URGENT CHAT</h4>
                </MenuTile>
            </motion.div>
            {/* </Link> */}

            {/* <Link to="/requestforletter" style={{ textDecoration: 'none' }}> */}
            <motion.div whileHover={{ scale: 1.05 }} style={motionStyle}>
                <MenuTile color={"#FD749B"} style={{marginBottom:"50px"}}>
                    <ImgContainer>
                        <img src={requestIcon} alt="request letter icon" />
                    </ImgContainer>
                    <h4>REQUEST FOR LETTER</h4>
                </MenuTile>
            </motion.div>
            {/* </Link> */}
        </motion.div>

    )
}

export default NavDash;