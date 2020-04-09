import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import avatarPlaceholder from "../assets/avatar_placeholder.png"
import { useLocation } from "react-router-dom"

const StyledUserAvatar = styled.div`
color: ${({ theme }) => theme.colors.darkShade[50]};
display: flex;
width: 80%;
align-items: center;
justify-content: flex-end;
img {
  margin-top: 8%;
  margin-bottom: 2%;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 2%;
}
`

const Back = styled.h6`
  font-family:${theme.typography.fontFamily};
  color:${theme.colors.pink};
  width:20%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px;
  &:hover {
    color: palevioletred;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  height: 100px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
`

const StyledResponsive = styled.div`
  display:flex;
  align-items:flex-end;
  flex-direction:column;
  font-size:14px;
  h6{
    margin:10px 10px 0 10px;
  }
`

function Header(props) {
  const location = useLocation();

  const { history, user, signOut } = props

  const handleClick = () => {
    history.goBack();
  }

  const handleHomeClick = () => {
    window.location = "/"
  }
  return (
    <React.Fragment>
      <StyledWrapper>
      {location.pathname == "/" &&  (
          <Back> </Back>
        )}
        {location.pathname !== "/chat" && location.pathname !== "/" && location.pathname !== "/appt_confirmation" && (
          <Back> <span onClick={handleClick} style={{ cursor: "pointer" }}><span style={{ fontSize: "18px" }}>‹&nbsp;</span>Back</span> </Back>
        )}
        {location.pathname == "/appt_confirmation" && (
          <Back> <span onClick={handleHomeClick} style={{ cursor: "pointer" }}><span style={{ fontSize: "18px" }}>‹&nbsp;</span>Home</span> </Back>
        )}
        {/* had to have two for home button because || didnt work for some reason */}
        {location.pathname == "/chat" && (
          <Back> <span onClick={handleHomeClick} style={{ cursor: "pointer" }}><span style={{ fontSize: "18px" }}>‹&nbsp;</span>Home</span> </Back>
        )}
        <StyledUserAvatar>
          <StyledResponsive>
            <h6 style={{ margin: "0"}}>{user.displayName || user.email} </h6> <span onClick={signOut} style={{ cursor: "pointer", textDecoration: "underline" }}> Logout </span>
          </StyledResponsive>

          <img src={user.photoURL || avatarPlaceholder} alt="avatar" />
        </StyledUserAvatar>
      </StyledWrapper>
    </React.Fragment>
  );
}

Header.propTypes = {
}

export default Header