import { IApiProfile, ISidebarItem } from "../../../redux/store";
import "./profileInfo.css";

interface IProps {
  profile: IApiProfile | null;
  photos: ISidebarItem[];
  currentUser: number | null;
}
export const ProfileInfo = (props: IProps) => {
  const findPic = () => {
    const answer = props.photos.find(
      (item) => +item.id === props.profile?.userId
    );
  };
  return (
    <div className="profile">
      <div className="description__block">
        {props.profile?.userId === props.photos}
        <span>{props.profile?.fullName || "Crying Kitty"}</span>
        <span>{props.profile?.aboutMe}</span>
      </div>
    </div>
  );
};
