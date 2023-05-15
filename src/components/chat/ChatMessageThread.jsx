import { useEffect, useState } from "react";
import { useChatContext } from "../../context/chatContext";
import Message from "./Message";

const ChatMessageThread = () => {
  const { chats, activeChat } = useChatContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chat = chats.filter((chat) => chat.id === activeChat)[0] ?? null;

    if (chat === null) {
      return;
    }

    setMessages(chat.messages);

    console.log(chats)
  }, [chats, activeChat]);

  return (
    <div className="w-full h-full flex flex-col gap-y-2 bg-gray-700 p-6">
      {activeChat !== null ? (
        <>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center text-white">
          <span>Open a Chat</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessageThread;
