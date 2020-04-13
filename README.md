This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 	SWD600 Assessment 2 Project Report
----

###Introduction
This paper follows up an earlier Feasibility Study which identified a real-life issue faced by Solent University undergraduates that could be resolved or improved by a technology-based solution. The Feasibility Study set out the methodology selected (an adapted version of the iterative ‘[design thinking](https://www.interaction-design.org/literature/topics/design-thinking)’  alongside an abbreviated form of Ulwicks ‘[Jobs to be Done](https://web-dev-industry-2020.firebaseapp.com/reading/jobs-to-be-done-book.pdf)’ system.  Together they were used to identify a hypothetical solution and design a prototype suitable for usability testing by representatives of the identified userbase. The study having resulted in a potential prototype for proof of concept purposes, the task was then to take on development of a single page application increasing functionality. This paper sets out how this was achieved.

###Background
The Feasibility study outlined the value that IT facilities had to students, ranking them amongst the top three provisions most important to their satisfaction level according to [surveys at uk universities](https://www.researchgate.net/publication/242349098_Measuring_Student_Satisfaction_at_a_UK_University). The MySolent Application provided a centralized access point for a wide range of digitally supplied resources for students in the service provision sector, and therefore represented an appropriate focus for student satisfaction with existing provision for the purposes of this exercise. Data was collected from current students using a survey approach and the results analysed. From this feedback a potential shortcoming in provision was identified in the student support area and the following ‘Jobs to be Done’ method a need statement was created:

>‘I want to get advice and counselling easily so I can maintain my mental well-being in order to successfully complete my course.’

Having defined a needs statement, various ideas were devised to see if improvements could be made to the existing Student Support application in the specific area of mental well-being. The following potential improvements were hypothesised:

* a.	an online appointment system for counselling sessions (privately). This allowed the system to be accessed whenever needed and not just within office hours. It would also eliminate the need for students to devise emails to counsellors and reduce the number of visits to the student hub to organise such arrangements (publicly), meeting interviewees need to reduce wider knowledge of any difficulties they might face.
* b.	a 24/7 online chat service so that students could raise their issues with professionally qualified staff.

This led to a proposal for a single page application to provide access to specialist advice through both an online counselling booking service and a 24/7 online emergency chat. 

Original Figma prototype designs for the application can be seen [here](https://www.figma.com/file/YX3ZA2AzKYJpgXadMFPmF3/Counselling-application-(current)?node-id=2%3A0) 

Created using the Coinbase ui kit

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
* [Chat View](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Views/Chat.js)
* [FriendTile Component](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Components/FriendTile.js)
* [useChat Hook](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/services/firebase/useChat.js)

Obviously this presents privacy issues for those seeking confidential advice but allowed for basic chat functionality to be developed without too much cognitive load approaching each problem one at a time. 

*When considering the issues of private chats and that counsellors need to be able to chat to many students but students need only talk to the counsellor it was obvious that some sort of contact list needed to be developed with logic to sort which contacts a user had access to. At this stage the Chat View was then seperated into 4 components the Chat View itself which also contained the FriendsList, and seperately the FriendTile and the ChatBubble.* - can probably go elsewhere

Having the FriendTile in a seperate component did not work as functions could not be called in that chat view passing data needed to generate a uniquely I'd message document in firebase. Therefore this component was removed and inserted into the chat view directly.

Generating a unique Identifier for each chat intiated with a contact presented a problem as the application would need to correctly specify which ID was for each chat every time a contact was selected. This [article](https://medium.com/@ngengesenior/database-structure-of-one-to-one-chat-app-with-firebase-93f813184dfe) helped with the solution needed comparing each unique id and forming a new unique id from them for each conversation. Unfortunately this solution also presents another problem as a cloud function had been planned to alert users to new messages but the nature of how they were stored prevented this. A work around could possibly be devised with another databse update via hook to create some kind of chat log sub collection to users but time was limited. 

As FriendsList was a seperate component within the same View to make the file a little more readable, passing the value for the unique chatID for each user to the onSnapShot useEffect in Chat presented an issue as values couldnt be passed up the component tree. A global 'let' variable was declared here so that the value could be used in either component.  









