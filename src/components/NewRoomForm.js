import React from "react";

export default function NewRoomForm(){
    return (
        <div className="new-room-form">
        <input 
            type="text"
            placeholder="NewRoomForm" 
            required
            />
        <button id="create-room-btn" type="submit" >+</button>
        </div>
    )
}