import { IApiProfile, ISidebarItem, IState } from "../../redux/store";
import { MyPostContainer } from "./MyPosts/MyPostContainer";

import "./profile.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

interface IProps {
  profile: IApiProfile | null;
  photos: ISidebarItem[];
  currentUser: number | null;
}

export const Profile = (props: IProps) => {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostContainer />
    </div>
  );
};
