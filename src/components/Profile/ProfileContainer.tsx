import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getProfileApi, clearPosts } from "../../redux/profileReducer";
import { IApiProfile, ISidebarItem, IState } from "../../redux/store";
import { Profile } from "./Profile";

export interface IProps {
  profile: IApiProfile | null;
  getProfileApi: (value: any) => void;
  getUser: () => void;
  clearPosts: () => void;
  photos: ISidebarItem[];
  currentUser: number | null;
}

export class ProfileApi extends React.Component<IProps> {
  componentWillUnmount() {
    this.props.clearPosts();
  }
  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/AlenaRudenko/demo/profile")
      .then((response) => {
        this.props.getProfileApi(response.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: IState) => ({
  profile: state.profilePage.profile,
  photos: state.sideBar,
  currentUser: state.profilePage.currentUser
});

export const ProfileContainer = connect(mapStateToProps, {
  getProfileApi,
  clearPosts
})(ProfileApi);
