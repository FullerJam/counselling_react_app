import React, { useEffect, useState, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChatBubble from '../Components/ChatBubble'
import { motion } from "framer-motion"

//context
import UserContext from "../config/user-context"


const StyledContentWrapper = styled.div`
  background-color:#e5e5e5;
  padding:50px;
  min-height:65vh;
  max-height:65vh;
  width:100%;
  max-width:1000px;
  overflow-y:scroll;
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
    padding:20px;
  }
  @media(max-width:580px){
    max-width:300px;
    padding:10px;
  }
  *{
    overflow-anchor: none;
  }
`
const StyledContentWrapper2 = styled.div`
  background-color:#e5e5e5;
  width:100%;
  height:10vh;
  padding:0 50px;
  max-width:1000px;
  display:flex;
  align-items:center;
  justify-content:center;
  textarea{
      font-size:16px;
      font-family:"Poppins";
      padding:15px;
      width:100%;
  }
  textarea::placeholder {
    font-size:16px;
    font-family:"Poppins";
  }
  @media(max-width:1020px){
    max-width:560px;
    padding:20px;
  }
  @media(max-width:580px){
    max-width:300px;
    padding:10px;
  }
`
const StyledComponentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const StyledAnchor = styled.div`
  overflow-anchor: auto;
  height:1px;
`

function Chat(props) {
  const user = useContext(UserContext)
  const { readChatMsgs, writeChatMsg, variants } = props
  const [messages, setMessages] = useState([])
  const [textInput, setTextInput] = useState("")



  const getMessages = async () => {
    let chatMessages = []
    // console.log(user)
    const chatRef = await readChatMsgs(user.uid)
    chatRef.forEach(chat => chatMessages.push(chat.data()))
    setMessages(chatMessages)
  };

  // scroll to bottom of chat with useEffect "Cannot add property scrollTop, object is not extensible"
  // const divEndRef = useRef(null)

  // const updateScroll = () => {
  //   console.log(divEndRef)
  //   setScrollTop(divEndRef.scrollHeight)
  // }

  // useEffect(() => {
  //   updateScroll()
  // }, [readChatMsgs])

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
          userId: user.uid,
          email: user.email
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
    <motion.div initial="out" animate="in" exit="out" variants={variants}>
      <React.Fragment>
        <StyledComponentWrapper>
          <StyledContentWrapper>
            {messages.map(message =>

              <motion.div initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}>
                <ChatBubble chatMessage={message} />
              </motion.div>

            )}
            <StyledAnchor></StyledAnchor>
          </StyledContentWrapper>
          <StyledContentWrapper2>

            <textarea
              rows="3"
              placeholder="Type something here..."
              value={textInput}
              onKeyPress={handleUpdateSubmit}
              onChange={e => setTextInput(e.target.value)}
            ></textarea>

          </StyledContentWrapper2>
        </StyledComponentWrapper>

      </React.Fragment>
    </motion.div>
  )
}

Chat.propTypes = {

}

export default Chat

