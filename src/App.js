import React, { useState } from 'react'
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { steps } from './components/Steps'
import { chatBotTheme } from './components/Theme'
import { ThemeProvider } from 'styled-components';
// import chatBotImage from './components/assets/beard.png';



function App() {
  const [isChatting, setIsChatting] = useState(false)

  const startChatting = () => {
    setIsChatting(!isChatting)
  }



  return (
    <div className="App">

      <div className={isChatting?"flex chat-icon-container": "chat-icon-container"} onClick={startChatting}>
        <i className="far fa-comments"></i>
      </div>
      {isChatting ? (<ThemeProvider theme={chatBotTheme}>
        <ChatBot steps={steps}  />
      </ThemeProvider>) : ""}




    </div>
  )
}

export default App;
