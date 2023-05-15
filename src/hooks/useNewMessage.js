import { v4 as uuidv4 } from "uuid";
import { useChatContext } from "../context/chatContext";
import { getTimestamp } from "../helpers/getTimestamp";
import { useNewChat } from "./useNewChat";

export const useNewMessage = () => {
  const { chats, activeChat, dispatchChat } = useChatContext();
  const { createNewChat } = useNewChat();

  const handleNewMessage = (inputValue = "") => {
    if (inputValue === "") {
      return;
    }

    if (activeChat === null) {
      createNewChat(inputValue, inputValue);
      return;
    }

    let chatInQuestion = {};
    let restOfTheChats = [];

    chats.forEach((chat) => {
      if (chat.id === activeChat) {
        chatInQuestion = chat;
        return;
      }
      restOfTheChats.push(chat);
    });

    chatInQuestion.messages.push({
      id: uuidv4(),
      isUser: true,
      text: inputValue,
      timestamp: getTimestamp(),
    });
      
      dispatchChat({
        type: "SET_CHATS",
        payload: [chatInQuestion, ...restOfTheChats],
      });
  };

  return { handleNewMessage };
};
