import { NavLink } from "react-router-dom";
import { IUsersItem } from "../../redux/usersReducer";
import "./styles.css";

interface IProps {
  id: IUsersItem["id"];
  fullName: IUsersItem["name"];
  followed: IUsersItem["followed"];
  status: IUsersItem["status"];
  changeFollow: (id: IUsersItem["id"]) => void;
  setUserId: (id: number) => void;
}

export const UserItem = (props: IProps) => {
  const changeFollow = () => {
    props.changeFollow(props.id);
  };
  const setUserId = () => {
    props.setUserId(props.id);
  };
  return (
    <div className="user__block">
      <div className="user__follow">
        <NavLink to={"/profile/" + props.id}>
          <img
            onClick={setUserId}
            alt=""
            src="https://www.meme-arsenal.com/memes/6f320c6bee4b51cf5a51536233955869.jpg"
          />
        </NavLink>

        <button
          className={
            props.followed ? `follow__button--unfollow` : `follow__button`
          }
          onClick={changeFollow}
        >
          {props.followed ? "UNFOLLOW" : "FOLLOW"}
        </button>
      </div>
      <div className="user__container">
        <div className="user__description">
          <span>{props.fullName}</span>
          <span>{props.status}</span>
        </div>
        <div className="user__location">
          <span>Russia</span>
          <span>Saransk</span>
        </div>
      </div>
    </div>
  );
};
