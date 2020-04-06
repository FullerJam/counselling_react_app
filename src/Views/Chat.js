import React, { useEffect, useState, useContext, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChatBubble from '../Components/ChatBubble'
import FriendTile from '../Components/FriendTile'
import { motion } from "framer-motion"

//context
import UserContext from "../config/user-context"


import contactIcon from "../assets/contactsIcon.svg"

const StyledFriendsWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`
const StyledMsgWrapper = styled.div`
  padding-top:20px;
  background-color:#e5e5e5;
  min-height:73vh;
  max-height:73vh;
  width:100%;
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
  *{
    overflow-anchor: none;
  }
`
const StyledTextAreaWrapper = styled.div`
  background-color:#e5e5e5;
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  textarea{
      font-size:16px;
      font-family:"Poppins";
      padding:15px 15px 15px 30px;
      width:100%;
  }
  textarea::placeholder {
    font-size:16px;
    font-family:"Poppins";
  }
`
const StyledComponentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-end;
  margin-left:2%;
  width:100%;
`

const StyledAnchor = styled.div`
  overflow-anchor: auto;
  height:1px;
`

function Chat(props) {
  const user = useContext(UserContext)
  const { readChatMsgs, writeChatMsg, variants, getFriendsList } = props
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


  const updateScroll = () => {
    let node = document.getElementById('chat-box-end')
    node.scrollIntoView();
  }

  useEffect(() => {

    // getMessages()
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
          <FriendsList getFriendsList={getFriendsList} />
          <StyledComponentWrapper>
            <StyledMsgWrapper>
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
            </StyledMsgWrapper>
            <StyledTextAreaWrapper>

              <textarea
                rows="3"
                placeholder="Type something here..."
                value={textInput}
                onKeyPress={handleUpdateSubmit}
                onChange={e => setTextInput(e.target.value)}
              ></textarea>

            </StyledTextAreaWrapper>
          </StyledComponentWrapper>
        </StyledFriendsWrapper>

      </React.Fragment>
    </motion.div>
  )
}

Chat.propTypes = {

}

const StyledNav = styled.div`
    transition: all 0.5s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-88%)")};
    min-height:86vh;
    width:300px;
    max-height:65;
    overflow-y:${({ open }) => (open ? "scroll" : "visible")};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    /* padding-top: 2%; */
    top: 10;
    left: 0;
    background-color:#d4d4d4;
    -webkit-scrollbar:none;
  `;

const StyledIconContainer = styled.div`
    /* height:${({ open }) => (open ? "auto" : "89vh")}; */
    img{
      width:40px;
      height:40px;
    }
    margin-right:1px;
  `


function FriendsList(props) {

  const user = useContext(UserContext)
  const { getFriendsList } = props
  const [open, setIsOpen] = useState(false)

  const [friends, setFriends] = useState([])

  const initialRender = useRef(true);

  useLayoutEffect(() => {
    if (initialRender.current) {
      const handleFriendGet = async () => {
        let friendsArray = []
        const friendRef = await getFriendsList(user.userId)
        friendRef.forEach(friend => friendsArray.push(friend.data()))
        setFriends(friendsArray)
      }
      handleFriendGet()
      initialRender.current = false
    }
  }, [])
  // const handleFriendGet = async () => {
  //   let friendsArray= []
  //   const friendRef = await getFriendsList(user.userId)
  //   friendRef.forEach(friend => friendsArray.push(friend.data()))
  //   setFriends(friendsArray)
  //   console.log(friendsArray);
  // }

  return (
    <React.Fragment>

      <StyledNav open={open}>
        {
          !open
            ?
            <StyledIconContainer onClick={() => setIsOpen(!open)}>
              <img src={contactIcon} alt="friends icon" />
            </StyledIconContainer>
            :
            <StyledIconContainer onClick={() => setIsOpen(!open)}>
              <div style={{ padding: "10px"}}>
                ⛌
              </div>
            </StyledIconContainer>
        }
        <FriendTile friends={friends} open={open} />
      </StyledNav>
    </React.Fragment>
  );
}

FriendsList.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Chat

