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

*When considering the issues of private chats and that counsellors need to be able to chat to many students but students need only talk to the counsellor it was obvious that some sort of contact list needed to be developed with logic to sort which contacts a user had access to. At this stage the Chat View was then seperated into 4 components the Chat View itself which also contained the FriendsList, and seperately the FriendTile and the ChatBubble.* - can probably go elsewhere

Having the FriendTile in a seperate component did not work as functions could not be called in that chat view passing data needed to generate a uniquely I'd message document in firebase. Therefore this component was removed and inserted into the chat view directly.

Generating a unique Identifier for each chat intiated with a contact presented a problem as the application would need to correctly specify which ID was for each chat every time a contact was selected. This [article](https://medium.com/@ngengesenior/database-structure-of-one-to-one-chat-app-with-firebase-93f813184dfe) helped with the solution needed comparing each unique id and forming a new unique id from them for each conversation. Unfortunately this solution also presents another problem as a cloud function had been planned to alert users to new messages but the nature of how they were stored prevented this. A work around could possibly be devised with another databse update via hook to create some kind of chat log sub collection to users but time was limited. 

As FriendsList was a seperate component within the same View to make the file a little more readable, passing the value for the unique chatID for each user to the onSnapShot useEffect in Chat presented an issue as values couldnt be passed up the component tree. A global 'let' variable was declared here so that the value could be used in either component.  









