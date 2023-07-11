import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return <>Chat</>;
};
