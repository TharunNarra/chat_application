import { useState, useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";

const GroupChat = () => {
  const { socket } = useSocketContext();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const groupName = "myGroup"; // For now, use a static group name. Later, this can be dynamic.

  useEffect(() => {
    // Listen for incoming group messages
    socket.on("receiveGroupMessage", (data) => {
      if (data.groupName === groupName) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    // Join the group on component mount
    socket.emit("joinGroup", groupName);

    return () => {
      // Leave the group on component unmount
      socket.emit("leaveGroup", groupName);
      socket.off("receiveGroupMessage");
    };
  }, [socket, groupName]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("groupMessage", groupName, message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl mb-4">Group Chat: {groupName}</h2>
      <div className="messages bg-gray-200 p-4 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 w-full"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white mt-2 p-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;

