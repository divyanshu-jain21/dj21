import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatBot1 = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Add an initial greeting message when the component mounts
    addResponseMessage('Hello! I am the IT Company Chatbot. How can I assist you today?');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    // Handle user messages here
    // For simplicity, this example adds a dummy response
    addUserMessage(newMessage);

    // Simulate a delay before the chatbot responds
    setTimeout(() => {
      addResponseMessage('I am a simple chatbot. Your message was: ' + newMessage);
    }, 1000);
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="IT Company Chatbot"
        subtitle="Ask me anything about our services!"
      />
    </div>
  );
};

export default ChatBot1;



// import React, { useState } from 'react';
// import { Chatbot } from 'react-chatbot-kit';
// import axios from 'axios';
// import "./Chatbot1.css";
// import { IoIosChatbubbles } from "react-icons/io";

// const Chatbot1 = () => {
//   const [showBot, toggleBot] = useState(false);
//   const [result, setResult] = useState(null);

//   const config = {
//     botName: 'MyChatbot',
//     lang: 'en',
//     customStyles: {
//       botMessageBox: {
//         backgroundColor: '#376B7E',
//       },
//       chatButton: {
//         backgroundColor: '#376B7E',
//       },
//     },
//     customComponents: {},
//   };

//   const handleOnToggle = () => {
//     toggleBot(!showBot);
//   };

//   const handleOnMessage = async (message) => {
//     const response = await axios.post('<chatbot-api-url>', {
//       message,
//     });
//     setResult(response.data);
//   };

//   return (
//     <div className='commonChatbot'>
//       <IoIosChatbubbles className='text-white fs-1' width={50} onClick={handleOnToggle}/>
//       {showBot && (
//         <Chatbot
//         className="text-white"
//           config={config}
//           messageParser={null}
//           actionProvider={null}
//           messageHistory={[]}
//           onMessage={handleOnMessage}
//         />
//       )}
//     </div>
//   );
// };

// export default Chatbot1