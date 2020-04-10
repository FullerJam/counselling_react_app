import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import chatIcon from "../assets/chat_icon.svg"
import { Link } from "react-router-dom"


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
function Footer() {
    const location = useLocation();

    return (
        <div>
            <StyledWrapper>
                <StyledIcon>
                    <Link to="/chat">
                        <img src={chatIcon} alt="" />
                    </Link>
                </StyledIcon>
            </StyledWrapper>
        </div>
    );
}


export default Footer;