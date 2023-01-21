import React from 'react';
import './chatbot.css';
import axios from 'axios';
import chatbotIcon from '../../assets/chatbox-icon.svg';

const Chatbot = () => {
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [chatText, setChatText] = React.useState([]);

  const toggle = () => {
    setShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(message);
    try {
      if (message === '') {
        return;
      }

      const  {data}  = await axios.post('http://127.0.0.1:8000/chatbot', { data: message });
      console.log(data);
      const msg2 = {name:"Bot", message:data.answer};
        setMessages([...messages, msg2]);
        updateChatText();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
    setMessage(input.value);
  };

  const updateChatText = () => {
    let html = ""
    messages.slice().reverse().forEach((item,index) => {
        if (item.name === "Bot") {
            html += `<div class="chatbox__message chatbox__message--bot">${item.message}</div>`
        } else {
            html += `<div class="chatbox__message chatbox__message--user">${item.message}</div>`
        }
        console.log(html);
        setChatText([...chatText,html]);
    })
    console.log(html);
};

  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${show ? ' chatbox--active' : ''}`}>
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-5--v1.png" alt="" />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">Hi. My name is Bot. How can I help you?</p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div>{chatText}</div>
          </div>
          <div className="chatbox__footer">
            <input type="text" placeholder="Write a message..." onChange={handleChange} />
            <button onClick={handleSubmit} className="chatbox__send--footer send__button">
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={toggle}>
            <img src={chatbotIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
