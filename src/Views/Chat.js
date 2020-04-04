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
  const [messages, setMessages] = useState([])
  const [textInput, setTextInput] = useState("")

  const getMessages = async () => {
    let chatMessages = []
    console.log(user)
    const chatRef = await readChatMsgs(user.uid)
    chatRef.forEach(chat => chatMessages.push(chat.data()))
    setMessages(chatMessages)
  };

  useEffect(() => {
    getMessages()
  }, [readChatMsgs, setMessages, user])

  const handleUpdateSubmit = async e => {
    if (!e.key) {
      console.log(e.key)
      setTextInput(e.target.value)
      return
    }
    if (textInput != "" && e.key === "Enter") {
      try {
        const newMsg = {
          msg: textInput,
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
        {console.log(messages)}
        <textarea
          rows="3"
          placeholder="Type something here..."
          value={textInput}
          // onKeyPress={handleUpdateSubmit} think you only need on change
          onChange={handleUpdateSubmit}
        ></textarea>
      </ContentWrapper>
    </React.Fragment>
  )
}

Chat.propTypes = {

}

export default Chat

