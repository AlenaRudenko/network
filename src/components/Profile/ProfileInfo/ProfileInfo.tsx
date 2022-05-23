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
  const user = props.photos.find((item) => +item.id === props.currentUser);
  return (
    <div className='profile'>
      <div className='description__block'>
        {user ? (
          <img alt='' src={user.avatar} />
        ) : (
          <img
            alt=''
            src='https://i.pinimg.com/236x/12/c7/4a/12c74ab187e1731c3b832711896fe2bf.jpg'
          />
        )}
        <span>{props.profile?.fullName || "Crying Kitty"}</span>
        <span>{props.profile?.aboutMe}</span>
      </div>
    </div>
  );
};
