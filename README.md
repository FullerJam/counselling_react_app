This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 	SWD600 Assessment 2 Project Report
----
###Development
**Framer Motion** 
Webpage - https://www.framer.com/motion/
Github - https://github.com/framer/motion
An additional javascript library used for react to power transitions and animation throughout application with ease. Used for every page transistion and messaging speach bubbles animations.


####Problems faced

**Private Messaging** 

The private messaging feature is the most complex View/Component combination within the application and presented the most problems during development. 

Initially to get basic functionality working for the 'Urgent Chat' feature within the application all message objects submitted were stored in the same collection within firebase. 

*Commit - 7fdfb2917a4938b3fbb8ff9091bf774e13d69552*
[Chat View](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Views/Chat.js)
[FriendTile Component](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Components/FriendTile.js)
[useChat Hook](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/services/firebase/useChat.js)

Obviously this presents privacy issues for those seeking confidential advice but allowed for basic chat functionality to be developed without too much cognitive load approaching each problem one at a time. 

When considering the issues of private chats and that counsellors need to be able to chat to many students but students need only talk to the counsellor it was obvious that some sort of contact list needed to be developed with logic to sort which contacts a user had access to. At this stage the Chat View was then seperated into 4 components the Chat View itself, the FriendsList Menu, the FriendTile and the ChatBubble. 

Having the 



