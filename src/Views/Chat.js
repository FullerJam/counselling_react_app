import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChatBubble from '../Components/ChatBubble'
import { motion } from "framer-motion"

//context
import UserContext from "../config/user-context"

const ContentWrapper = styled.div`
  background-color:#e5e5e5;
  padding:10px;
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
    // console.log(user)
    const chatRef = await readChatMsgs(user.uid)
    chatRef.forEach(chat => chatMessages.push(chat.data()))
    setMessages(chatMessages)
  };

  useEffect(() => {
    getMessages()
  }, [readChatMsgs, setMessages, user])

  const handleUpdateSubmit = async e => {
    // if ENTER was pressed without SHIFT, prevent default
    // if(e.key === "Enter" && !e.shiftKey){
    //   e.preventDefault()
    //   return false
    // }
    // if textbox value isnt empty and ENTER is pressed
    if (textInput != "" && e.key === "Enter") {
      console.log(e.key)
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
        {messages.map(message => <ChatBubble chatMessage={message.msg} />)}
        <textarea
          rows="3"
          placeholder="Type something here..."
          value={textInput}
          onKeyPress={handleUpdateSubmit}
          onChange={e => setTextInput(e.target.value)}
        ></textarea>
      </ContentWrapper>

    </React.Fragment>
  )
}

Chat.propTypes = {

}

export default Chat

