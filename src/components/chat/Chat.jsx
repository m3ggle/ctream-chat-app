import ChatInput from "./ChatInput";
import ChatMessageThread from "./ChatMessageThread";

const Chat = () => {
  return (
    <div className="w-full h-screen bg-gray-700 flex flex-col">
      {/* msg thread */}
      <ChatMessageThread />
      {/* input */}
      <ChatInput />
    </div>
  );
};

export default Chat;
