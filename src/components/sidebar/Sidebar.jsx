// import { chats } from "../../data/testData";
import { useChatContext } from "../../context/chatContext";
import { useNewChat } from "../../hooks/useNewChat";
import ChatPreview from "./ChatPreview";

const Sidebar = () => {
  const { chats, dispatchChat } = useChatContext();
  const { createNewChat } = useNewChat();

  const handleNewChat = () => {
    createNewChat();
  };

  const handleChat = (id) => {
    dispatchChat({ type: "SET_ACTIVE_CHAT", payload: id });
  };

  return (
    <div className="w-[260px] h-full flex flex-col gap-y-4 bg-gray-800 p-2">
      {/* new chat button */}
      <button
        onClick={handleNewChat}
        className="flex gap-x-4 items-center w-full border-[1px] border-white/60 rounded-md px-3 py-2 hover:border-white/20 hover:bg-white/20 hover:shadow-md"
      >
        <i className="fa-solid fa-plus text-[16px] text-white" />
        <span className="text-base text-white">New Chat</span>
      </button>

      {/* old chats */}
      <div className="flex flex-col gap-y-2 w-full h-full overflow-y-scroll">
        {chats.map((chat) => (
          <ChatPreview chat={chat} key={chat.id} clickCallback={handleChat} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
