import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

export const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);

  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((el, ind) => {
            return (
              <div
                className="single-user"
                key={ind}
                onClick={() => createChat(user._id, el._id)}
              >
                {el.name}
                <span className="user-online"></span>
              </div>
            );
          })}
      </div>
    </>
  );
};
