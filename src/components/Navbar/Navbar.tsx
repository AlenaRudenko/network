import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Friends } from "../Friends/FriendItem/Friends";
import { ISidebarItem } from "../../redux/store";

interface IProps {
  sideBar: ISidebarItem[];
}

export const Navbar = ({ sideBar }: IProps) => {
  let links = [
    {
      to: "/profile",
      name: "Profile"
    },
    {
      to: "/dialogues",
      name: "Messages"
    },
    {
      to: "/news",
      name: "News"
    },
    {
      to: "/musidc",
      name: "Music"
    },
    {
      to: "/settings",
      name: "Settings"
    },
    {
      to: "/friends",
      name: "Friends"
    },
    {
      to: "/users",
      name: "Find users"
    }
  ];
  return (
    <nav className="nav">
      {links.map((link) => (
        <div className="nav__item">
          <NavLink to={link.to}>{link.name}</NavLink>
        </div>
      ))}
      <div className="friends__container">
        {sideBar.map((friend) => {
          if (friend.id <= "3") {
            return <Friends name={friend.name} img={friend.avatar} />;
          } else return "";
        })}
      </div>
    </nav>
  );
};
