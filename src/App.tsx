import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Music } from "./components/Music/Music";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./components/Settings/Settings";
import { FriendsPageContainer } from "./components/Friends/FriendsPageContainer";
import { NavbarContainer } from "./components/Navbar/NavBarContainer";
import { DialoguesContainer } from "./components/Dialoges/DialoguesContainer";
import { UsersContainer } from "./components/Users/UsersContainer";

export const App = () => {
  let appElement = [
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/dialogues/*",
      element: <DialoguesContainer />
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/music",
      element: <Music />
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "/friends",
      element: <FriendsPageContainer />
    },
    {
      path: "/users",
      element: <UsersContainer />
    }
  ];
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="content">
          <Routes>
            {appElement.map((element) => (
              <Route path={element.path} element={element.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};
