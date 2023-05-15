const chatReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEW_CHAT":
      return {
        ...state,
        chats: payload.chats,
        activeChat: payload.activeChat,
      };
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeChat: payload,
      };
    case "SET_CHATS":
      return {
        ...state,
        chats: payload,
      };

    
    default:
      break;
  }
};

export default chatReducer;
