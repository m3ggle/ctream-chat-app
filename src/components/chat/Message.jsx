
const Message = ({ message }) => {
  return (
    <div
      className={`flex w-full ${
        message.isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`w-full max-w-[75%] p-3 rounded-md ${
          message.isUser ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <span className="text-white">{message.text}</span>
      </div>
    </div>
  );
};

export default Message;
