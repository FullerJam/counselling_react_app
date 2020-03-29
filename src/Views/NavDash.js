import React from "react"
import MenuTile from "../Components/MenuTile"
import styled from "styled-components"
import theme from "../config/theme.js"
import { Link } from "react-router-dom";

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
  p{
    margin:10px 0px 40px;
    line-height: 1.6;
  }
`

function NavDash() {

    return (
        <div>
            <ContentWrapper>
                <StyledGreeting>
                    Hi, Username
                </StyledGreeting>
                <p>Welcome back! <br /> Choose from one of the options below</p>
            </ContentWrapper>

            <Link to="/appointments" style={{ textDecoration: 'none' }}>
                <MenuTile >
                    <ImgContainer>
                        <img src={calendarIcon} alt="calendar icon" />
                    </ImgContainer>
                    <h4>APPOINTMENTS</h4>
                </MenuTile>
            </Link>

            {/* <Link to="/advice" style={{ textDecoration: 'none' }}> */}
                <MenuTile color={"#1E62A1"} >
                    <ImgContainer>
                        <img src={mentalHealthIcon} alt="mental health icon" />
                    </ImgContainer>
                    <h4>MENTAL HEALTH ADVICE</h4>
                </MenuTile>
            {/* </Link> */}

            {/* <Link to="/chat" style={{ textDecoration: 'none' }}> */}
                <MenuTile color={"#FFC43D"} >
                    <ImgContainer>
                        <img src={urgentChatIcon} alt="chat icon" />
                    </ImgContainer>
                    <h4>URGENT CHAT</h4>
                </MenuTile>
            {/* </Link> */}

            {/* <Link to="/requestforletter" style={{ textDecoration: 'none' }}> */}
                <MenuTile color={"#FD749B"} >
                    <ImgContainer>
                        <img src={requestIcon} alt="request letter icon" />
                    </ImgContainer>
                    <h4>REQUEST FOR LETTER</h4>
                </MenuTile>
            {/* </Link> */}
        </div>
    )
}

export default NavDash;