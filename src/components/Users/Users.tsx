import { IUsersItem } from "../../redux/usersReducer";
import { UserItem } from "./UserItem";

interface IProps {
  users: IUsersItem[];
  setUsers: (value: IUsersItem[]) => void;
  changeFollow: (id: IUsersItem["id"]) => void;
  updatePage: () => void;
}
export const Users = (props: IProps) => {
  return (
    <div>
      <button onClick={props.updatePage}>UPDATE PAGE</button>
      <div className="user__main">
        {props.users.map((user) => {
          return (
            <UserItem
              changeFollow={props.changeFollow}
              followed={user.followed}
              id={user.id}
              fullName={user.name}
              status={user.status}
            />
          );
        })}
      </div>
    </div>
  );
};
