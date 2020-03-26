import React from "react";

import theme from "../config/theme.js"
import PropTypes from "prop-types";
import styled from "styled-components";
import avatarPlaceholder from "../assets/avatar_placeholder.png";
import { Link, useLocation } from "react-router-dom";

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
  margin: 2%
}
`;

const Back = styled.h6`
  font-family:${theme.typography.fontFamily};
  color:${theme.colors.pink};
  width:20%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px;
`

const StyledWrapper = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.colors.grey};
height: 100px;
display: flex;
justify-content: space-between;
box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
`;

function Header(props) {
    
    return (
      <div>  
        <StyledWrapper>
            <Back> <span style={{fontSize:"18px"}}>‹&nbsp;</span> Back</Back>
          <StyledUserAvatar>
            <h6>User  <span> (login/logout) </span></h6>
            <img src={avatarPlaceholder} alt="avatar" />
          </StyledUserAvatar>
        </StyledWrapper>
      </div>
    );
  }

  Header.propTypes = {
  };
  
  export default Header;