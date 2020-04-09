import React, { useContext } from "react"
import MenuTile from "../Components/MenuTile"
import styled from "styled-components"
import theme from "../config/theme.js"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import UserContext from "../config/user-context"

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
  width:100%;
  padding:2%;
  margin:0 auto;
  max-width:1000px;
  p{
    margin:10px 0px 40px;
    line-height: 1.6;
  }
  @media(max-width:1020px){
    max-width:560px;
  }
  @media(max-width:580px){
    max-width:300px;
  }
`

const TileContentWrapper = styled.div`
    width:50%;
    height:100%;
    display:inline-block;
    
    img, h4{
        margin-left:30px;
    }

    @media(max-width:580px){
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        margin:0;
        img, h4{
            margin:0;
        }
    }
    
`
const TileContentWrapper2 = styled.div`

    width:50%;
    height:100%;
    display:inline-block;
    color:white;
    ul li {
        font-size:1.5rem;
        padding-bottom:10px;
        list-style:none;
    }
    @media(max-width:580px){
        display:none;
    }
    @media(max-width:1020px){
        ul li {
        font-size:1rem;
    }
    }
`

// const motionStyle = {
//     maxWidth: "480px",
// }


function NavDash(props) {
    const user = useContext(UserContext)
    const { variants } = props
    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <ContentWrapper>
                <StyledGreeting>
                    Hi, {user.displayName || user.email}
                </StyledGreeting>
                <p>Welcome back! <br /> Choose from one of the options below</p>


                <Link to="/appointments" style={{ textDecoration: 'none' }}>
                    <motion.div whileHover={{ scale: 1.05 }} >
                        <MenuTile>
                            <TileContentWrapper>
                                <ImgContainer>
                                    <img src={calendarIcon} alt="calendar icon" />
                                </ImgContainer>
                                <h4>APPOINTMENTS</h4>
                            </TileContentWrapper>
                            <TileContentWrapper2>
                                <ul>
                                    <li>
                                        Appointments dashboard - See all booked appointments
                                    </li>
                                    <li>
                                        Book an appointment
                                    </li>
                                </ul>
                            </TileContentWrapper2>
                        </MenuTile>
                    </motion.div>
                </Link>

                <Link to="/mental_health_advice" style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ scale: 1.05 }} >
                    <MenuTile color={"#1E62A1"} >
                        <TileContentWrapper>

                            <ImgContainer>
                                <img src={mentalHealthIcon} alt="mental health icon" />
                            </ImgContainer>
                            <h4>MENTAL HEALTH ADVICE</h4>
                        </TileContentWrapper>
                        <TileContentWrapper2>
                            <ul>
                                <li>
                                    Covid-19 and how it affects how we're operating
                                    </li>
                                <li>
                                    Self Help Guides
                                    </li>
                                <li>
                                    Organisations and helplines in Southampton
                                    </li>
                            </ul>
                        </TileContentWrapper2>
                    </MenuTile>
                </motion.div>
                </Link>

                <Link to="/chat" style={{ textDecoration: 'none' }}>
                    <motion.div whileHover={{ scale: 1.05 }} >
                        <MenuTile color={"#FFC43D"} style={{ marginBottom: "50px" }}>
                            <TileContentWrapper>

                                <ImgContainer>
                                    <img src={urgentChatIcon} alt="chat icon" />
                                </ImgContainer>
                                <h4>URGENT CHAT</h4>
                            </TileContentWrapper>
                            <TileContentWrapper2>
                                <ul>
                                    <li>
                                        Support from our counsellor live
                                    </li>
                                    <li>
                                        24-7 Availability
                                    </li>
                                    <li>
                                        Keep us up to date on your progress
                                    </li>
                                </ul>
                            </TileContentWrapper2>
                        </MenuTile>
                    </motion.div>
                </Link>


            </ContentWrapper>
        </motion.div>

    )
}

export default NavDash;