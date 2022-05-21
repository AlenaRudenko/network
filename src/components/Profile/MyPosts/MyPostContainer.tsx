import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  addPost,
  getPosts,
  updateNewPostText
} from "../../../redux/profileReducer";
import { IPostdataItem, IProfile, IState } from "../../../redux/store";

import { MyPosts } from "./MyPosts";
import "./MyPosts.css";

interface IProps {
  postsData: IProfile["postsData"];
  newPostText: string;
  updateNewPostText: (value: string) => void;
  addPost: () => void;
  getPosts: (value: IPostdataItem[]) => void;
}

export class MyPostsApi extends React.Component<IProps> {
  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/AlenaRudenko/demo/posts")
      .then((response) => this.props.getPosts(response.data));
  }

  render() {
    return (
      <MyPosts
        postsData={this.props.postsData}
        newPostText={this.props.newPostText}
        updateNewPostText={this.props.updateNewPostText}
        addPost={this.props.addPost}
      />
    );
  }
}

const MapStateToProps = (state: IState) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

export const MyPostContainer = connect(MapStateToProps, {
  updateNewPostText,
  addPost,
  getPosts
})(MyPostsApi);
