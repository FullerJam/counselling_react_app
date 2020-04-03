import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from "framer-motion"

//context
import UserContext from "../config/user-context"

const ContentWrapper = styled.div`
  background-color:#e5e5e5;
  height:85vh;
  width:100%;
  margin:0 auto;
  max-width:1000px;
  position: relative;
  textarea{
      width:85%;
      margin:0 auto;
      position:absolute;
      bottom:0;
      left:calc(6%);
      font-size:16px;
      font-family:"Poppins";
      padding:15px;
  }
  textarea::placeholder {
    font-size:16px;
    font-family:"Poppins";
  }
  @media(max-width:1020px){
    max-width:560px;
  }
  @media(max-width:580px){
    max-width:300px;
  }
`

function Chat(props) {
  const user = useContext(UserContext)
  const { readChatMsgs, writeChatMsg } = props
  const [message, setMessages] = useState([])
  const [textInput, setTextInput] = useState("")

  const getMessages = async () => {
    let chatMessages = []
    console.log(user.uid)
    const chatRef = await readChatMsgs(user.uid)
    chatRef.forEach(c => chatMessages.push(c.data()))
    setMessages(chatMessages)
  };

  useEffect(() => {
    getMessages()
  }, [readChatMsgs, setMessages, user])

  const handleUpdateSubmit = async e => {

    if (!e.key) {
      setTextInput(e.target.value)
      return
    }

    if (textInput !== "" && e.key === "13") {
      try {
        const newMsg = {
          msg: message,
          time: new Date().toISOString(),
          userId: user.uid
        }
        setTextInput("")
        await writeChatMsg(user.uid, newMsg)
        getMessages()
      } catch (error) {
        console.log(error.message)
      }
      return
    }
  };



  return (
    <React.Fragment>
      <ContentWrapper>
        {console.log(message)}
        <textarea
          rows="3"
          placeholder="Type something here..."
          onChange={handleUpdateSubmit}
          onKeyPress={handleUpdateSubmit}
          value={textInput}
        ></textarea>
      </ContentWrapper>
    </React.Fragment>
  )
}

Chat.propTypes = {

}

export default Chat

