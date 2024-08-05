// import React, { useState, useRef } from "react";
// import "./ChatBox.css";

// const responses = {
//   "who are you":
//     "My name is Humphrey Omondi, a web developer who creates modern websites for clients who are inspired by modern technology.",
//   hello:
//     "Hello! Have you ever wanted to own a website? Contact me today and have one.",
//   "what are your experiences":
//     "I am experienced in React.js, HTML, CSS, JavaScript, Bootstrap, and Python.",
//   "how old are you":
//     "I am 23 years old, but I have two years of experience on the development journey.",
//   // Add more predefined responses here
// };

// export default function ChatBox() {
//   const [messages, setMessages] = useState([
//     { text: "Hello! You can ask me up to 12 questions.", sender: "bot" },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [questionCount, setQuestionCount] = useState(0);
//   const [isChatBoxVisible, setChatBoxVisible] = useState(false); // New state for chatbox visibility
//   const chatBoxRef = useRef(null);
//   const maxQuestions = 12;

//   const typingSound = useRef(
//     new Audio(
//       "sounds/mechanical-keyboard-typing-sound-effect-128-ytshorts.savetube.me.mp3"
//     )
//   ).current;

//   const handleSendMessage = () => {
//     if (userInput.trim() && questionCount < maxQuestions) {
//       addMessage(userInput, "user");
//       const response =
//         responses[userInput.trim().toLowerCase()] ||
//         "I am here to assist you with your website needs.";
//       setTimeout(() => {
//         typeMessage(response, "bot");
//       }, 500);
//       setUserInput("");
//       setQuestionCount((prevCount) => prevCount + 1);
//     } else if (questionCount >= maxQuestions) {
//       addMessage("You have reached the maximum number of questions.", "bot");
//     }
//   };

//   const addMessage = (text, sender) => {
//     setMessages((prevMessages) => [...prevMessages, { text, sender }]);
//   };

//   const typeMessage = (text, sender) => {
//     let index = 0;
//     const typingSpeed = 50; // Milliseconds per character
//     const message = { text: "", sender };
//     setMessages((prevMessages) => [...prevMessages, message]);

//     function type() {
//       if (index < text.length) {
//         setMessages((prevMessages) => {
//           const updatedMessages = [...prevMessages];
//           // Update the last message in the array by adding the next character
//           updatedMessages[updatedMessages.length - 1].text = text.slice(
//             0,
//             index + 1
//           );
//           return updatedMessages;
//         });
//         index++;

//         if (!typingSound.paused) {
//           typingSound.play();
//         }

//         setTimeout(type, typingSpeed);
//       } else {
//         typingSound.pause();
//         typingSound.currentTime = 0;
//       }
//     }

//     type();
//   };

//   const handleDragStart = (e) => {
//     const chatBox = chatBoxRef.current;
//     chatBox.style.position = "absolute";
//     chatBox.style.zIndex = "1000";

//     let shiftX = e.clientX - chatBox.getBoundingClientRect().left;
//     let shiftY = e.clientY - chatBox.getBoundingClientRect().top;

//     function onMouseMove(event) {
//       // Ensure the chatbox stays within the viewport
//       let newLeft = event.pageX - shiftX;
//       let newTop = event.pageY - shiftY;

//       // Constrain movement within viewport
//       newLeft = Math.max(
//         0,
//         Math.min(newLeft, window.innerWidth - chatBox.offsetWidth)
//       );
//       newTop = Math.max(
//         0,
//         Math.min(newTop, window.innerHeight - chatBox.offsetHeight)
//       );

//       chatBox.style.left = newLeft + "px";
//       chatBox.style.top = newTop + "px";
//     }

//     document.addEventListener("mousemove", onMouseMove);

//     chatBox.onmouseup = function () {
//       document.removeEventListener("mousemove", onMouseMove);
//       chatBox.onmouseup = null;
//     };

//     chatBox.ondragstart = function () {
//       return false;
//     };
//   };

//   return (
//     <div>
//       {!isChatBoxVisible && (
//         <div className="chat-icon" onClick={() => setChatBoxVisible(true)}>
//           💬 {/* You can use an icon or an image here */}
//         </div>
//       )}

//       {isChatBoxVisible && (
//         <div
//           className="chat-container"
//           ref={chatBoxRef}
//           onMouseDown={handleDragStart}
//         >
//           <div className="chat-header">
//             <button
//               className="close-button"
//               onClick={() => setChatBoxVisible(false)}
//             >
//               X
//             </button>
//           </div>
//           <div className="chat-box" id="chat-box">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.sender}`}>
//                 {message.text}
//               </div>
//             ))}
//           </div>
//           <input
//             type="text"
//             id="user-input"
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             placeholder="Type your question here..."
//             onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//           />
//           <button id="send-button" onClick={handleSendMessage}>
//             Send
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useRef } from "react";
import "./ChatBox.css";

const responses = {
  "who are you":
    "My name is Humphrey Omondi, a web developer who creates modern websites for clients who are inspired by modern technology.",
  hello:
    "Hello! Have you ever wanted to own a website? Contact me today and have one.",
  "what are your experiences":
    "I am experienced in React.js, HTML, CSS, JavaScript, Bootstrap, and Python.",
  "how old are you":
    "I am 23 years old, but I have two years of experience on the development journey.",
  // Add more predefined responses here
};

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello! You can ask me up to 12 questions.", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [isChatBoxVisible, setChatBoxVisible] = useState(false); // New state for chatbox visibility
  const chatBoxRef = useRef(null);
  const maxQuestions = 12;

  const typingSound = useRef(
    new Audio(
      "sounds/mechanical-keyboard-typing-sound-effect-128-ytshorts.savetube.me.mp3"
    )
  ).current;

  const handleSendMessage = () => {
    if (userInput.trim() && questionCount < maxQuestions) {
      addMessage(userInput, "user");
      const response =
        responses[userInput.trim().toLowerCase()] ||
        "I am here to assist you with your website needs.";
      setTimeout(() => {
        typeMessage(response, "bot");
      }, 500);
      setUserInput("");
      setQuestionCount((prevCount) => prevCount + 1);
    } else if (questionCount >= maxQuestions) {
      addMessage("You have reached the maximum number of questions.", "bot");
    }
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const typeMessage = (text, sender) => {
    let index = 0;
    const typingSpeed = 50; // Milliseconds per character
    const message = { text: "", sender };
    setMessages((prevMessages) => [...prevMessages, message]);

    function type() {
      if (index < text.length) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          // Update the last message in the array by adding the next character
          updatedMessages[updatedMessages.length - 1].text = text.slice(
            0,
            index + 1
          );
          return updatedMessages;
        });
        index++;

        if (!typingSound.paused) {
          typingSound.play();
        }

        setTimeout(type, typingSpeed);
      } else {
        typingSound.pause();
        typingSound.currentTime = 0;
      }
    }

    type();
  };

  const handleDragStart = (e) => {
    const chatBox = chatBoxRef.current;
    chatBox.style.position = "absolute";
    chatBox.style.zIndex = "1000";

    let shiftX = e.clientX - chatBox.getBoundingClientRect().left;
    let shiftY = e.clientY - chatBox.getBoundingClientRect().top;

    function onMouseMove(event) {
      // Ensure the chatbox stays within the viewport
      let newLeft = event.pageX - shiftX;
      let newTop = event.pageY - shiftY;

      // Constrain movement within viewport
      newLeft = Math.max(
        0,
        Math.min(newLeft, window.innerWidth - chatBox.offsetWidth)
      );
      newTop = Math.max(
        0,
        Math.min(newTop, window.innerHeight - chatBox.offsetHeight)
      );

      chatBox.style.left = newLeft + "px";
      chatBox.style.top = newTop + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    chatBox.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      chatBox.onmouseup = null;
    };

    chatBox.ondragstart = function () {
      return false;
    };
  };

  return (
    <div>
      {!isChatBoxVisible && (
        <div className="chat-icon" onClick={() => setChatBoxVisible(true)}>
          💬 {/* You can use an icon or an image here */}
        </div>
      )}

      {isChatBoxVisible && (
        <div
          className="chat-container"
          ref={chatBoxRef}
          onMouseDown={handleDragStart}
        >
          <div className="chat-header">
            <button
              className="close-button"
              onClick={() => setChatBoxVisible(false)}
            >
              X
            </button>
          </div>
          <div className="chat-box" id="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              id="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your question here..."
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button id="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


