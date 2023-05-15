import React from "react";

const ChatPreview = ({ chat, clickCallback }) => {
  const handleChat = () => {
    clickCallback(chat.id);
  };

  return (
    <button
      key={chat.id}
      onClick={handleChat}
      className="flex gap-x-3 w-full min-h-[48px] overflow-hidden bg-white/10 p-3 items-center rounded-md cursor-pointer shadow-sm hover:shadow-md hover:bg-white/20"
    >
      <i className="fa-solid fa-comments text-white/80 w-6 h-6 text-[14px] flex items-center justify-center" />
      <span className="w-full text-sm text-white/80 truncate flex justify-start">
        {chat.topic ?? ""}
      </span>
    </button>
  );
};

export default ChatPreview;
