import { v4 as uuidv4 } from "uuid";
import { useChatContext } from "../context/chatContext";
import { getTimestamp } from "../helpers/getTimestamp";

export const useNewChat = () => {
  const { chats, dispatchChat } = useChatContext();

  const createNewChat = (topic = null, message = null) => {
    const chatId = uuidv4();

    const newChats = [
      {
        id: chatId,
        timestamp: getTimestamp(),
        lastChanged: getTimestamp(),
        topic,
        messages:
          message !== null
            ? [
                {
                  id: uuidv4(),
                  isUser: true,
                  text: message,
                  timestamp: getTimestamp(),
                },
              ]
            : [],
      },
      ...chats,
    ];

    const newActiveChat = chatId;

    dispatchChat({
      type: "NEW_CHAT",
      payload: { chats: newChats, activeChat: newActiveChat },
    });
  };

  return { createNewChat };
};
