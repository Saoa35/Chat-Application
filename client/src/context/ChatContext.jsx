import { createContext, useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);
  const [potentialChats, setPotentialChats] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);

      if (response.error) {
        return console.log("Getting users error ", response);
      }

      const chatsArr = response.filter((el) => {
        let isChatCreated = false;

        if (user._id === el._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            return chat.members[0] === el._id || chat.members[1] === el._id;
          });
        }

        return !isChatCreated;
      });

      setPotentialChats(chatsArr);
    };

    getUsers();
  }, [userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null);

        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

        setIsUserChatsLoading(false);

        if (response.error) {
          return setUserChatsError(response);
        }

        setUserChats(response);
      }
    };

    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{ userChats, isUserChatsLoading, userChatsError, potentialChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};
