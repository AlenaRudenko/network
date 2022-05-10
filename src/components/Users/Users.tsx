import axios from "axios";
import { IUsersItem } from "../../redux/usersReducer";
import { UserItem } from "./UserItem";
interface IProps {
  setUsers: (users: IUsersItem[]) => void;
  users: IUsersItem[];
  changeFollow: () => void;
}
export const Users = (props: IProps) => {
  const getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((value) => {
        console.log(value);
      });
  };

  console.log(props);
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
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
