import { connect } from "react-redux";
import { IState } from "../../redux/store";
import {
  changeFollow,
  IUsersItem,
  setUsers,
  updatePage
} from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import { Users } from "./Users";

interface IProps {
  users: IUsersItem[];
  setUsers: (value: IUsersItem[]) => void;
  changeFollow: (id: IUsersItem["id"]) => void;
  updatePage: () => void;
}

export class UsersApi extends React.Component<IProps> {
  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/AlenaRudenko/demo/users")
      .then((value) => {
        this.props.setUsers(value.data);
      });
  }
  updatePage = () => {
    this.props.updatePage();
  };
  render() {
    return (
      <Users
        setUsers={this.props.setUsers}
        users={this.props.users}
        changeFollow={this.props.changeFollow}
        updatePage={this.props.updatePage}
      />
    );
  }
}

const mapStateToProps = (state: IState) => ({
  users: state.usersPage.users
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeFollow: (id: IUsersItem["id"]) => dispatch(changeFollow(id)),
    setUsers: (users: IUsersItem[]) => dispatch(setUsers(users)),
    updatePage: () => dispatch(updatePage())
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApi);
