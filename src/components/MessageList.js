import React from "react";

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]

export default function MessageList(){
    return (
        <div className="message-list">
        <div>
{DUMMY_DATA.map((message, index)=> {
    return (
        <div className="message">
            <div className="message-username">{message.senderId}</div>
            <div className="message-text">{message.text}</div>
        </div>
    )
})}

        </div>
        </div>
    )
}
