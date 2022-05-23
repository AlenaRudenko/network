import { IAction, IApiProfile, IPostdataItem, IProfile } from "./store";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const GET_POSTS = "GET_POSTS";
const GET_USER = "GET_USER";
const SET_USER_ID = "SET_USER_ID";
const CLEAR_POSTS = "CLEAR_POSTS";

let initialState: IProfile = {
  postsData: [],
  profile: null,
  newPostText: "",
  currentUser: null
};

export const profileReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: "5",
        text: state.newPostText,
        likesCount: "0"
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPostText: action.payload
      };
    }
    case GET_POSTS: {
      return {
        ...state,
        postsData: [...state.postsData, ...action.payload]
      };
    }
    case CLEAR_POSTS: {
      return {
        ...state,
        postsData: []
      };
    }
    case GET_USER: {
      return {
        ...state,
        profile: action.payload.find(
          (user) => user.userId === state.currentUser
        )
      };
    }
    case SET_USER_ID: {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    default:
      return state;
  }
};
export const addPost = () => ({
  type: ADD_POST
});
export const updateNewPostText = (value: string) => ({
  type: UPDATE_NEW_POST,
  payload: value
});
export const getPosts = (value: IPostdataItem[]) => ({
  type: GET_POSTS,
  payload: value
});
export const getProfileApi = (value: any) => ({
  type: GET_USER,
  payload: value
});
export const setUserId = (id: IProfile["currentUser"]) => ({
  type: SET_USER_ID,
  payload: id
});
export const clearPosts = () => ({
  type: CLEAR_POSTS
});
