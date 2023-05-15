import { createContext, useContext, useReducer } from "react";
import chatReducer from "./chatReducer";
import {chatTemplate} from "./chatTemplate";

const ChatContext = createContext({
  ...chatTemplate,
  dispatchChat: () => {},
});
ChatContext.displayName = "ChatContext";

export function useChatContext() {
  return useContext(ChatContext);
}

export const ChatProvider = ({ children }) => {
  const initialState = {
    // ...chatTemplate,
    chats: [],
    activeChat: null
  };

  const [state, dispatchChat] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ ...state, dispatchChat }}>
      {children}
    </ChatContext.Provider>
  );
};
