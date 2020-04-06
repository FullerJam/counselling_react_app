import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"


const StyledChat = styled.div`
    max-width: 300px;
    background-color: ${({ theme }) => theme.colors.pink};
    min-height: 40px;
    padding:5px 10px;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
    border-radius:5px 5px 5px 0px;
    p{
        margin:0px;
    }
    label{
        font-size:10px;
        color:#f4f4f4;
    }
`;

const StyledCorner = styled.div`
    width:5px;
    height:8px;
    background-color:${({ theme }) => theme.colors.pink};
    border-radius:5px 0 0 5px;
    bottom:0;
    left:0;
`

const StyledWrapper = styled.span`
    display:flex;
    align-items:flex-end;
    max-width: 300px;
    padding:0 0 10px 50px;
`



function ChatBubble(props) {

    const { chatMessage } = props

    return (
        <React.Fragment>
            <StyledWrapper>
                <StyledCorner />
                <StyledChat>
                    <label>{chatMessage.email}</label>
                    <p>{chatMessage.msg}</p>
                </StyledChat>
            </StyledWrapper>
        </React.Fragment>
    );
}

ChatBubble.propTypes = {
};

export default ChatBubble;