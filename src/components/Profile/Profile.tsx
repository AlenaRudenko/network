import { IState } from "../../redux/store";
import { MyPostContainer } from "./MyPosts/MyPostContainer";

import "./profile.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  );
};
