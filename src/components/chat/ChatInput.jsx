import { useRef } from "react";
import { useNewMessage } from "../../hooks/useNewMessage";

const ChatInput = () => {
  const inputRef = useRef(null);
  const { handleNewMessage } = useNewMessage();

  const handleSubmit = () => {
    handleNewMessage(inputRef.current.value);
    inputRef.current.value = ""
  }

  return (
    <div className="w-full  min-h-[140px] flex justify-center bg-gray-600 px-3">
      <div className="w-full h-fit max-w-[600px] rounded-md bg-gray-700 p-3 flex gap-x-3 mt-6 items-center">
        <input
          ref={inputRef}
          type="text"
          className="w-full text-base text-white bg-transparent outline-none"
          placeholder="Send a message."
        />
        <button
          onClick={handleSubmit}
          className="w-10 h-full flex items-center justify-center mr-[2px]"
        >
          <i className="fa-regular fa-paper-plane text-white/60" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
