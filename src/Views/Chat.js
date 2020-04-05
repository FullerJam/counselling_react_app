import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChatBubble from '../Components/ChatBubble'
import FriendTile from '../Components/FriendTile'
import { motion } from "framer-motion"

//context
import UserContext from "../config/user-context"


const StyledNav = styled.div`
    transition: all 0.5s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-90%)")};
    min-height:84vh;
    width:300px;
    max-height:65;
    overflow-y:${({ open }) => (open ? "scroll" : "visible")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    padding-top: 2%;
    top: 10;
    left: 0;
    background-color:#e4e4e4;
    -webkit-scrollbar:none;
    
  `;




function FriendsList(props) {
  
  const user = useContext(UserContext)
  const { getFriendsList } = props
  const [open, setIsOpen] = useState(false)

  const [friends, setFriends] = useState([])



  const handleFriendGet = async () => {
    const friendRef = await getFriendsList()
    friendRef.forEach(friend => friends.push(friend.data()))
    setFriends(friends)
  }

  return (
    <React.Fragment>
      <StyledNav
        onClick={() => setIsOpen(!open), handleFriendGet}
        open={open}
      >
        <FriendTile />
      </StyledNav>
    </React.Fragment>
  );
}

FriendsList.propTypes = {
  onClick: PropTypes.func.isRequired
};

const StyledFriendsWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`

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
  justify-content:center;
  align-items:center;
  width:100%;
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
    updateScroll()
  };

  // scroll to bottom of chat with useEffect "Cannot add property scrollTop, object is not extensible"
  // const divEndRef = useRef(null)

  const updateScroll = () => {
    let node = document.getElementById('chat-box-end')
    node.scrollIntoView();
  }

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
        <StyledFriendsWrapper>
          <FriendsList />
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
              <StyledAnchor id='chat-box-end'>&nbsp;</StyledAnchor>
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
        </StyledFriendsWrapper>

      </React.Fragment>
    </motion.div>
  )
}

Chat.propTypes = {

}

export default Chat

