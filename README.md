This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 	SWD600 Assessment 2 Project Report
----

###Introduction
An earlier Feasibility Study identified a real-life issue faced by Solent University undergraduates that could be resolved or improved by a technology-based solution. The Feasibility Study set out the methodology selected, an adapted version of the iterative ‘[design thinking](https://www.interaction-design.org/literature/topics/design-thinking)’  alongside an abbreviated form of Ulwicks ‘[Jobs to be Done](https://web-dev-industry-2020.firebaseapp.com/reading/jobs-to-be-done-book.pdf)’ system. Combined they were used to identify a hypothetical solution and design a prototype suitable for usability testing by representatives of the identified userbase. From the study a prototype was developed for faster user flow revision purposes.  Following this the task was then to take on development of a single page web application with increasing functionality. This paper sets out how this was achieved.

###Background
---
#####General Area of Study
The Feasibility study outlined the value that IT facilities had to students, ranking them amongst the top three provisions most important to their satisfaction level according to [surveys at uk universities](https://www.researchgate.net/publication/242349098_Measuring_Student_Satisfaction_at_a_UK_University). This provided a significant area for further research where a technology solution might be appropriate and beneficial.

#####Focusing in on the study area
The MySolent Application provided a centralized access point for a wide range of digitally supplied resources for students in the service provision sector, and therefore represented an appropriate focus for student satisfaction with existing provision for the purposes of this exercise. 

#####Collecting Evidence
Data was collected from current students using a survey approach and the results analysed. From this feedback a potential shortcoming in provision was identified in the student support area and the following ‘Jobs to be Done’ method need statement was created:

>‘I want to get advice and counselling easily so I can maintain my mental well-being in order to successfully complete my course.’

#####A Feasible Solution

Having defined a needs statement, various ideas were devised to see if improvements could be made to the existing Student Support application in the specific area of mental well-being. The following potential improvements were hypothesised:

* a.	an online appointment system for counselling sessions (privately). This allowed the system to be accessed whenever needed and not just within office hours. It would also eliminate the need for students to devise emails to counsellors and reduce the number of visits to the student hub to organise such arrangements (publicly), meeting interviewees need to reduce wider knowledge of any difficulties they might face.
* b.	a 24/7 online chat service so that students could raise their issues with professionally qualified staff.

This led to a proposal for a single page application to provide access to specialist advice through both an online counselling booking service and a 24/7 online emergency chat. 

Original Figma prototype designs for the application can be seen [here](https://www.figma.com/file/YX3ZA2AzKYJpgXadMFPmF3/Counselling-application-(current)?node-id=2%3A0) 

Created using the [Coinbase UI Kit](https://freedesignresources.net/free-coinbase-web-mobile-ui-kit/)

###Development

The single page application developed for this assignmentment was built using Facebooks javascript framework React

####Folder Structure
```
counselling_app
├── config-overrides.js
├── firebase.json
├── firestore.indexes.json        
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── assets
│   │   ├── appt_icon.svg
│   │   ├── avatar_placeholder.png
│   │   ├── boy.png
│   │   ├── calendar_icon.svg     
│   │   ├── chat_.svg
│   │   ├── chat_icon.svg
│   │   ├── contactsIcon.svg
│   │   ├── email.png
│   │   ├── health.png
│   │   ├── mental_health_icon.svg
│   │   ├── notification.svg
│   │   ├── password.png
│   │   ├── request_icon.svg
│   │   ├── signup.png
│   │   ├── tick.svg
│   │   └── urgent_chat_icon.svg
│   ├── Components
│   │   ├── Button.js
│   │   ├── ChatBubble.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Loader.js
│   │   ├── LoginForm.js
│   │   └── MenuTile.js
│   ├── config
│   │   ├── boolean-context.js
│   │   ├── firebase.js
│   │   ├── GlobalStyles.js
│   │   ├── theme.js
│   │   └── user-context.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── old firestore rule
│   ├── services
│   │   └── firebase
│   ├── serviceWorker.js
│   ├── setupTests.js
│   └── Views
│       ├── Appointments.js
│       ├── ApptConfirmation.js
│       ├── Chat.js
│       ├── DateSelect.js
│       ├── Login.js
│       ├── MentalHealthAdvice.js
│       ├── NavDash.js
│       └── SignUp.js
└── yarn.lock
```


####Additional dependencies used


#####Styled Components
[Styled components](https://styled-components.com/) harnesses template literals and Cascading Style Sheets (CSS) to create a styling solution that can be written directly within a javascript file to declare components that can be rendered like any other component. The below code snippet shows how the component is declared, styles inserted using CSS and how functions can be interpolated into the template literal. Here a global theme is declared for the buttons background colour and a prop used to provide margin styling for each individual button.

As this project was bootstrapped with Create React App (CRA), [Customize-CRA](https://github.com/arackaf/customize-cra) was needed to alter the core configuration to implement styled components.

```
const StyledButton = styled.button`
        background-color:${({ theme }) => theme.colors.pink};
        color:white;
        border:0;
        margin:${props => props.m};
        border-radius:5px;
        padding:10px;
        width:180px;
        font-weight:800;
        &:hover {
        background-color: palevioletred;
        color: white;
        cursor: pointer;
        }
    `

    function Button(props) {
    const { onClick, text, m } = props;

    return (
        <React.Fragment>
            <StyledButton onClick={onClick} m={m}>
                {text}
            </StyledButton>
        </React.Fragment>
    );
}
```
######Theme
A theme file was created within the config file directory to be imported into each file to keep certain stylings consistent throughout different screens.

```
const theme = {
  colors: {
    offWhite:"#f4f4f4",
    pink: "#FD749B",
    lightPurple: "#7180AC",
    green:"#0FE133", 
    grey: "#F3F3F3",
    turq: "#1B9AAA",
    blue: "#1E62A1",
    red: "#ff0000",
    yellow: "#FFC43D",
  },
  typography: {
    font: {
      fontFamily:'Poppins, sans-serif'
    },
    h1: {
      fontSize: "calc(12px + 2vmin)"
    },
    h2: {
        fontSize: "calc(11px + 2vmin)"
    },

    h3: {
        fontSize: "calc(10px + 1.6vmin)"
    },

    h4: {
        fontSize: "calc(8px + 2vmin)"
    }, 

    h6: {
      fontSize: "14px",
    },

    em: {
      fontSize: "11px",
    }

  }
};

export default theme;


```

**Framer Motion** 
Github - https://github.com/framer/motion
[Framer motion](https://www.framer.com/motion/) is an additional javascript library used for react to power transitions and animation throughout the application with ease. It was used for every page transistion and messaging speech bubble animations.

**React loader spinner**
[React-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) Provides collections of SVG animations which can be utilised during async await delays. This was combined with a styled component wrapper to do just that.

**React Hook Form**
[React Hook Form](https://react-hook-form.com/), a more concise and performant javascript library for implementing forms with simple validation. This was used for implementing the login form for authentication 

**Yup**
[yup](https://github.com/jquense/yup), a javascript object schema builder for value parsing and validation. This was used in conjunction with React Hook form, although it was probably not necessary for such a simple validation.

**Moment**
[Moment](https://www.npmjs.com/package/moment), a JavaScript date library for manipulating and formatting dates. This was utilised within the appointments dash board, dates select and Chat features of the application.

**Firebase/Firestore**
[Firebase](https://firebase.google.com/) is a No SQL cloud database allowing data storage, cloud functions, security rules for the application.

**React Calender**
[React Calender](https://www.npmjs.com/package/react-calendar) an npm module to display an interactive calender 

**uuid** 
[uuid](https://www.npmjs.com/package/uuid) a javascript library was employed for generating Unique Identifiers (UID's)


###Application Features
----

The application comprised of three main features, which are detailed below with additional relevant information.

####Appointment Dashboard

Here the user is provided with all the information about upcoming and past appointments. They also have the ability to access the appointment booking interface here and to cancel appointments should they no longer be required. The useState hook is used in conjunction with useAppointments custom hook to pull information from the database and update it with cancelled appointments.

####Appointment Booking Interface

Here is where the user can select future dates for potential counselling sessions within the university. Past dates, including the current and following day dates, are blocked by the minDate prop provided in the react calender library and use of the moment library ```minDate={moment().add(1, 'days').toDate()}```. The useState hook is used, in conjunction with useAppointments custom hook, to persist values to the database.

####Private Messaging

The [private messaging feature](https://github.com/FullerJam/counselling_react_app/blob/master/src/Views/Chat.js) is the most complex View/Component combination within the application and presented the most problems during development. 

Initially, to get basic functionality working for the 'Urgent Chat' feature within the application, all message objects submitted were stored in the same collection within firebase. 

*Commit - 7fdfb2917a4938b3fbb8ff9091bf774e13d69552*
* [Chat View](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Views/Chat.js)
* [FriendTile Component](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/Components/FriendTile.js)
* [useChat Hook](https://github.com/FullerJam/counselling_react_app/blob/7fdfb2917a4938b3fbb8ff9091bf774e13d69552/src/services/firebase/useChat.js)

Obviously this presents privacy issues for those seeking confidential advice.  However, it allowed for basic chat functionality to be developed without too much cognitive load, approaching each problem one at a time. 

When considering the issues of private chats, and that counsellors need to be able to chat to many students but students need only talk to the counsellor, it was obvious that some sort of contact list needed to be developed with logic to sort which contacts a user had access to. At this stage the Chat View was then seperated into four components: the Chat View itself, which also contained the FriendsList, and seperately the FriendTile and the ChatBubble. 

As the authenticated users table in firebase only holds email, user ID and password credentails. Another collection had to be created to store users' additional information (isAdmin, photo url etc..). Firebase cloud functions were utilised for this task so that a document would be saved to the collection on each sign up. this is shown in the userCreated function below. isAdmin was used to filter the contacts available for each student, i.e. just admin counsellors.

```
const functions = require('firebase-functions');
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

 admin.initializeApp();
 const db = admin.firestore();

 exports.userCreated = functions.auth.user().onCreate(user => {
 return db
     .collection("users")
     .doc(user.uid)
     .set({
        isAdmin:false,
        uid:user.uid,
        email:user.email,
        avatar:user.photoURL
    }, {merge:true})

 });

 //deletes user db entry when user is removed from authorised accounts
 exports.userDeleted = functions.auth.user().onDelete(user => {
 return db
     .collection("users")
     .doc(user.uid)
     .delete();
 });
```


**Problems faced**

Having the FriendTile in a seperate component did not work as function calls could not be passed up the component tree to the chat view passing relevant data needed to generate a unique Id message document in firebase. Therefore this component was removed, the code adjusted and inserted into the chat view directly.

Generating a unique Identifier for each chat intiated with a contact presented a problem as the application would need to correctly specify which ID was for each chat every time a contact was selected (so that the correct messages could be loaded and saved to the database). This [article](https://medium.com/@ngengesenior/database-structure-of-one-to-one-chat-app-with-firebase-93f813184dfe) helped with the solution needed, comparing each unique id and forming a new unique id from them for each conversation. Unfortunately this solution also presented another problem as a cloud function had been planned to alert users to new messages but the nature of how they were stored prevented this. A work around could possibly be devised with another database update via hook to create some kind of chat log sub collection to users, but time was limited for its achievement. 

As FriendsList was a seperate component within the same View (making the file a little more readable), passing the value for the unique chatID for each user to the onSnapShot useEffect in Chat. This presented an issue as values could not be passed up the component tree. A global 'Let' variable was declared here so that the value could be updated and used in either component.  

###Testing

Thanks to 2020 being rudely interuppted by the corona virus, testing has had to be carried out via alternate means as user testing seems a little inappropriate considering circumstances. Testing therefore consisted of a [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) report. (This isan open source reporting tool for evaluating the performance and quality of webpages for desktop/mobile and user stories to see whether the acceptance criteria has been achieved through implementation).

####Lighthouse reports
HTML Full report files for both mobile and desktop rating can be found below.  They will need to downloaded and viewed locally in a browser. Previews of the scores are shown in the images below:

* **Desktop test** 
[Link here](https://drive.google.com/open?id=1WQVWR_AGCiMtS1hSExf2ysY-3sIUe61Q)
![desktop lighthouse report](https://i.ibb.co/SvJYzD2/desktop-score.png)

* **Mobile test** 
[Link here](https://drive.google.com/open?id=1JQGit1wiUu1W0TSO_yhfzvRX8wKzvlZi)
![desktop lighthouse report](https://i.ibb.co/kmcc9hY/mobile.png)

####User stories
Acceptance Criteria(AC)

* As a student who needs mental support I want the ability to book appointments without too much hassle.
  * **AC1** - Simple interface for selection of dates ✅
  * **AC2** - Ability to book appointments in advance for the future ✅
  * **AC3** - Interface is easy to interact with on both desktop and mobile ✅

All acceptance criteria's were met for the appointments interface. I feel that further adjustments could be made so that counsellors would have a different dashboard to approve cancellations, allowing them to manage their time better or to make regular / emergency clients aware of appointment times that have become available. Due to this being a proof of concept, development halted following the most basic needs being achieved.

* As a student who needs regular appointments for supportive counselling, I want to be able to see all of the appointments I have booked in one location. 
  * **AC1** - Simple interface showing all appointment history and upcoming appointments ✅
  * **AC2** - Appointments are ordered with upcoming dates listed first ✅
  * **AC3** - Ability to cancel appointments easily ✅

All acceptance criteria's were met for the appointments dashboard. A further improvement
could be to limit the amount of appointments retrieved from the database, with an option
to load more, should the user wish to have the information, reducing server load.

* As a vulnerable person I want the ability to seek advice/support in the fastest way possible. 
  * **AC1** - Easily access this feature from any location within the application ✅
  * **AC2** - Easily distinguish between your messages and the counsellors ✅
  * **AC3** - Interface is easy to interact with on both desktop and mobile ✅
  * **AC4** - Be notified when new messages arrive should the user not have the web application open ❌

All acceptance criterias, bar AC4, were met for the urgent chat needs. Unfortunately, due to the way that conversations were saved in firestore as individual documents (titled with unique ID's composed of both the user ID's participating) with sub collections of messages, I did not find a way to create a function that would alert the indivdual user ID of when a message had been recieved that did not originate from them. I am sure there would be a way to do this with more time and thought.  

###Conclusion

In conclusion, I believe the proof of concept developed meets the needs addressed by the students interviewed and the needs statement developed from those interviews. The react application has been designed so that it can be used easily on both mobile and desktop, with a simple sign up form that utilises single sign on authentication from other issuers that the user (potentially) already has an account with. If I were to complete this assignment again I think I would have put more research into firebase security rules or potentially looked at a different backend alternatives altogether which might have provided more flexibility when it came to backend functions, processes & data structure. Nethertheless the application developed








