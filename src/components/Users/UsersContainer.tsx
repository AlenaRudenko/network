import { connect } from "react-redux";
import { changeFollow, setUsers } from "../../redux/usersReducer";
import { Users } from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users
});
const mapDispatchToProps = (dispatch) => {
  return {
    changeFollow: (id) => dispatch(changeFollow(id)),
    setUsers: (users) => dispatch(setUsers(users))
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
