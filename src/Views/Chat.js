import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ChatBubble from '../Components/ChatBubble'
import { motion } from "framer-motion"
import useAuth from "../services/firebase/useAuth"
//context
import UserContext from "../config/user-context"

import avatarIcon from "../assets/avatar_placeholder.png"
import contactIcon from "../assets/contactsIcon.svg"
// import notification from "../assets/notification.svg"

const StyledFriendsWrapper = styled.div`
  display:flex;
  width:100%;
`
const StyledChatWrapper = styled.div`
  padding-top:20px;
  background-color:#e5e5e5;
  min-height:81.3vh;
  max-height:81.3vh;
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
  /* position:absolute;
  bottom:0; */
  background-color:#e5e5e5;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  textarea{
      font-size:16px;
      font-family:"Poppins";
      padding:15px 15px 15px 30px;
      width:100%;
      outline: none;
      resize: none;
      z-index:100;
      left: 0;
      bottom: 0;
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
let chatIdGlobal = "" // declared so useEffect has access to value in chat component for creating collection for both users messages
let stateGlobal = false //used this to trigger messages to retrieve from useEffect, didnt work

function Chat(props) {
  const user = useContext(UserContext)
  const { writeChatMsg, variants, getFriendsList, firestore, createDirectMsgRepo } = props
  const [messages, setMessages] = useState([])
  const [textInput, setTextInput] = useState("")

  const updateScroll = () => {
    let div = document.getElementById('chat-box-end')
    div.scrollIntoView();
  }

  //useEffect for retrieving messages onSnapshot
  useEffect(() => {
    if (chatIdGlobal !== "") { //prevents page from crashing
      let chatMessages = []
      const chatRef = firestore.collection("direct_messages").doc(chatIdGlobal).collection("messages_repo").orderBy("time", "asc").onSnapshot(snapshot => {
        if (snapshot.size) { //if item is added to the database listener updates
          chatMessages = []
          snapshot.forEach(chat => chatMessages.push(chat.data()))
          setMessages(chatMessages)
          updateScroll()
        }
      })
      return () => {
        chatRef()
      }
    }
  }, [setMessages, firestore, user, chatIdGlobal])


  const handleUpdateSubmit = async e => {
    if (textInput !== "" && e.key === "Enter") {
      try {
        const newMsg = {
          msg: textInput,
          time: new Date(),
          senderId: user.uid,
          email: user.email
        }
        setTextInput("")
        await writeChatMsg(newMsg, chatIdGlobal, user.uid)
      } catch (error) {
        console.log(error.message)
        alert("Error: Please select a user from the contacts menu on the left hand side of the screen before sending a message")
      }
      return
    }
  }


  return (
    <motion.div initial="out" animate="in" exit="out" variants={variants}>
      <React.Fragment>
        <StyledFriendsWrapper>
          <FriendsList getFriendsList={getFriendsList} setMessages={setMessages} createDirectMsgRepo={createDirectMsgRepo} />
          <StyledComponentWrapper>
            <StyledChatWrapper>

              {
                messages.map(message =>

                  <motion.div initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}>
                    <ChatBubble
                      chatMessage={message}
                      sender={user.uid === message.senderId}
                    />
                  </motion.div>

                )}
              <StyledAnchor id='chat-box-end'>&nbsp;</StyledAnchor>
            </StyledChatWrapper>
          </StyledComponentWrapper>
        </StyledFriendsWrapper>
        <StyledTextAreaWrapper>

          <textarea
            id="messageBox"
            rows="1"
            placeholder="Type something here..."
            value={textInput}
            onKeyPress={handleUpdateSubmit}
            onChange={e => setTextInput(e.target.value)}
          ></textarea>

        </StyledTextAreaWrapper>
      </React.Fragment>
    </motion.div>
  )
}
//writeChatMsg, variants, getFriendsList, firestore, createDirectMsgRepo
Chat.propTypes = {
  getFriendsList: PropTypes.func.isRequired,
  createDirectMsgRepo: PropTypes.func.isRequired,
  variants: PropTypes.object.isRequired,
  writeChatMsg: PropTypes.func.isRequired,
  firestore: PropTypes.object.isRequired
}

const StyledNav = styled.div`
    transition: all 0.4s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-87%)")};
    min-height:89.4vh;
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
      cursor:pointer;
    }
    margin-right:1px;
  `

const StyledIconCircle = styled.div`
  height:25px;
  width:25px;
  margin-right:15px;
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    border-radius:50%;
    height:40px;
    width:40px;
  }
`
const StyledFriendsWrapper2 = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;

`
const StyledContactWrapper = styled.div`
    transition: all 0.5s ease-in-out;
    display:${({ open }) => (open ? "flex" : "none")};
    align-items:center;
    border-radius:2px;
    width:100%;
    max-width:230px;
    padding:10px;
    margin:5px 0 0 16px;
    background-color:white;
    cursor:pointer;
    h6{
        color:grey;
        margin:5px 0;
        padding:0px;
    }
    span:hover{
      background-color:#9a9797;
    }
`

function FriendsList(props) {

  const user = useContext(UserContext)
  const { getFriendsList, createDirectMsgRepo } = props
  const [open, setIsOpen] = useState(false)
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const handleFriendGet = async () => {
      let friendsArray = []
      let adminArray = []
      let filteredFriendsArray = []

      const friendRef = await getFriendsList(user.uid)
      friendRef.forEach(contact => friendsArray.push(contact.data())) // returns all users
      adminArray = friendsArray.filter(contact => contact.isAdmin !== false)
      const adminCheck = () => {
        return adminArray.some(contact => contact.isAdmin !== false && contact.uid === user.uid); // returns an array of users that are admins && that are the current user id, should only return true if user is an admin 
      }
      if (adminCheck()) {
        filteredFriendsArray = friendsArray.filter(contact => contact.uid !== user.uid)
      } else {
        filteredFriendsArray = friendsArray.filter(contact => contact.uid !== user.uid && contact.isAdmin !== false)
        // add all user except yourself to friend list
      }
      // console.log(filteredFriendsArray)
      setFriends(filteredFriendsArray)
    }
    handleFriendGet()
  }, [useAuth, user])

  const startChat = async (userId, receiverUid, receiverImgUrl, senderImgUrl) => {
    let node = document.getElementById('messageBox')
    node.focus() // usability +
    stateGlobal = !stateGlobal
    // console.log(stateGlobal)
    setIsOpen(!open)
    // console.log("values passed to startChat - userId =" + userId + " receiverUid = " + receiverUid + " senderImgUrl = " + senderImgUrl)
    if (userId < receiverUid) {
      chatIdGlobal = receiverUid + userId
    } else {
      chatIdGlobal = userId + receiverUid
    }
    console.log("chatId =" + chatIdGlobal)
    try {
      const dmrObject = {
        senderId: userId,
        senderAvatar: senderImgUrl,
        receiverId: receiverUid,
        receiverAvatar: receiverImgUrl
      }
      await createDirectMsgRepo(chatIdGlobal, dmrObject)
    } catch (error) {
      console.log(error.message)
      alert(error.message)
      //need to make some sort of modal error for this
    }
    return
  }

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
              <div style={{ padding: "5px 10px 0 10px", cursor: "pointer" }}>
                ⛌
              </div>
            </StyledIconContainer>
        }
        <StyledFriendsWrapper2>
          {friends.map(friend =>
            <motion.div whileHover={{ scale: 1.03 }}>
              <StyledContactWrapper open={open} onClick={() => startChat(user.uid, friend.uid, friend.avatar, user.photoURL)} >
                <StyledIconCircle>
                  <img src={friend.avatar || avatarIcon} alt="avatar" />
                </StyledIconCircle>
                <h6>{friend.email.split('@')[0]}</h6>
              </StyledContactWrapper>
            </motion.div>
          )}
        </StyledFriendsWrapper2>
      </StyledNav>
    </React.Fragment>
  );
}

FriendsList.propTypes = {
  getFriendsList: PropTypes.func.isRequired,
  createDirectMsgRepo: PropTypes.func.isRequired
}

export default Chat

