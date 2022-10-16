import './style.css';
import Message from './components/Message.js'
import MessageList from "./components/MessageList"
import NewRoomForm from "./components/NewRoomForm"
import RoomList from "./components/RoomList"
import SendMessageForm from "./components/SendMessageForm"

function App() {
  return (
    <div className='app'>
          <RoomList />
          <MessageList />
          <SendMessageForm />
          <NewRoomForm />
    </div>
  );
}

export default App;
