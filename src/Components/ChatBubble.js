import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import moment from "moment";


const StyledSpan = styled.div`
    display:flex;
    justify-content:${({ sender }) => (sender ? "flex-start" : "flex-end")};
    align-items:flex-end;
    padding:0 0 10px 50px;
    margin-right:100px;
    width:90%;
    @media(max-width: 810px ){
        width:80%;
    }
`

const StyledChat = styled.div`
    max-width: 300px;
    background-color: ${({ sender }) => (sender ? ({ theme }) => theme.colors.pink : theme.colors.blue)};
    min-height: 40px;
    padding:5px 10px;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
    border-radius:${({ sender }) => (sender ? "5px 5px 5px 0px" : "5px 5px 0px 5px")};
    word-wrap: break-word;
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
    background-color:${({ sender }) => (sender ? ({ theme }) => theme.colors.pink : theme.colors.blue)};
    border-radius:${({ sender }) => (sender ? "5px 0 0 5px" : "0 5px 5px 0;")};
    bottom:0;
    left:0;
`

const StyledTime = styled.p`
    display:flex;
    justify-content:flex-end;
    width:100%;
    font-size:8px;
    color:#f4f4f4;
`




function ChatBubble(props) {

    const { chatMessage, sender } = props

    return (
        <React.Fragment>
            {sender ?
                <StyledSpan sender={sender}>
                    <StyledCorner sender={sender} />
                    <StyledChat sender={sender}>
                        <label>{chatMessage.email}</label>
                        <p>{chatMessage.msg}</p>
                        <StyledTime>
                            <div>
                                {moment(chatMessage.time.toDate()).fromNow()}
                            </div>
                        </StyledTime>
                    </StyledChat>
                </StyledSpan> :
                <StyledSpan sender={sender}>
                    <StyledChat sender={sender}>
                        <label>{chatMessage.email.split('@')[0]}</label>{/*for some reason doesnt work, but worked for contact list*/}
                        <p>{chatMessage.msg}</p>
                        <StyledTime>
                            <div>
                                {moment(chatMessage.time.toDate()).fromNow()}
                            </div>
                        </StyledTime>
                    </StyledChat>
                    <StyledCorner sender={sender} />

                </StyledSpan>
            }
        </React.Fragment>
    );
}

ChatBubble.propTypes = {
};

export default ChatBubble;