import { connect } from "react-redux";
import { IState } from "../../redux/store";
import {
  changeFollow,
  IUsers,
  IUsersItem,
  setIsFetching,
  setUsers,
  updatePage
} from "../../redux/usersReducer";
import { setUserId } from "../../redux/profileReducer";
import axios from "axios";
import React from "react";
import { Users } from "./Users";

interface IProps {
  users: IUsersItem[];
  setUsers: (value: IUsersItem[]) => void;
  changeFollow: (id: IUsersItem["id"]) => void;
  updatePage: () => void;
  isFetching: IUsers["isFetching"];
  setIsFetching: (value: IUsers["isFetching"]) => void;
  setUserId: (id: number) => void;
}

export class UsersApi extends React.Component<IProps> {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get("https://my-json-server.typicode.com/AlenaRudenko/demo/users")
      .then((value) => {
        this.props.setIsFetching(false);
        this.props.setUsers(value.data);
      });
  }
  updatePage = () => {
    this.props.updatePage();
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img
            alt=""
            src="https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
          />
        ) : null}
        <Users
          setUserId={this.props.setUserId}
          setUsers={this.props.setUsers}
          users={this.props.users}
          changeFollow={this.props.changeFollow}
          updatePage={this.props.updatePage}
        />
      </>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching
});

export const UsersContainer = connect(mapStateToProps, {
  changeFollow,
  setUsers,
  updatePage,
  setIsFetching,
  setUserId
})(UsersApi);
