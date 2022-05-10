import { ISidebarItem } from "../../redux/store";
import "./FriendItem/friends.css";

interface IProps {
  sideBar: ISidebarItem[];
}

export const FriendsPage = ({ sideBar }: IProps) => {
  return (
    <div className="friends__list">
      {sideBar.map((friend) => (
        <div className="friendsPage">
          <div className="friend__pic">
            <img src={friend.avatar} alt="" />
          </div>

          <span>{friend.name}</span>
        </div>
      ))}
    </div>
  );
};
