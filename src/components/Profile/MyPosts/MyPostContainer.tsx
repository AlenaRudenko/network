import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";

import { MyPosts } from "./MyPosts";
import "./MyPosts.css";

const MapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (value) => {
      dispatch(updateNewPostActionCreator(value));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};
export const MyPostContainer = connect(
  MapStateToProps,
  mapDispatchToProps
)(MyPosts);
