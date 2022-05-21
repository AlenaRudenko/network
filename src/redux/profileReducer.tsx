import { IAction, IApiProfile, IPostdataItem, IProfile } from "./store";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const GET_POSTS = "GET_POSTS";
const GET_USER = "GET_USER";

let initialState: IProfile = {
  postsData: [],
  profile: [],
  newPostText: ""
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
        postsData: [...state.profile, ...action.payload]
      };
    }
    case GET_USER: {
      return {
        ...state,
        profile: action.payload
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
