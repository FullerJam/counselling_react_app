import React from "react";
import theme from "../config/theme.js"
import PropTypes from "prop-types";
import styled from "styled-components";
import chatIcon from "../assets/chat_icon.svg";
import { Link, useLocation } from "react-router-dom";


const StyledWrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
    height: 40px;
    display: flex;
    justify-content: center;
    align-items:center;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
`;

const StyledIcon = styled.div`
    width:25px;
    height:25px;
`

function Footer(props) {

    return (
        <div>
            <StyledWrapper>
                <StyledIcon>
                    <img src={chatIcon} alt=""/>
                </StyledIcon>
            </StyledWrapper>
        </div>
    );
}

Footer.propTypes = {
};

export default Footer;