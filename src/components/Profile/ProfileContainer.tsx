import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getProfileApi } from "../../redux/profileReducer";
import { IApiProfile, IState } from "../../redux/store";
import { Profile } from "./Profile";

export interface IProps {
  profile: IApiProfile[];
  getProfileApi: (value: any) => void;
}

export class ProfileApi extends React.Component<IProps> {
  componentDidMount() {
    debugger;
    axios
      .get("https://my-json-server.typicode.com/AlenaRudenko/demo/profile")
      .then((response) => {
        this.props.getProfileApi(response.data);
      });
    console.log(this.props.profile);
  }
  render() {
    return <Profile />;
  }
}

const mapStateToProps = (state: IState) => {
  return {
    profile: state.profilePage.profile
  };
};
export const ProfileContainer = connect(mapStateToProps, { getProfileApi })(
  ProfileApi
);
