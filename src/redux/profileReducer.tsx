import { IAction, IProfile } from "./store";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState: IProfile = {
  postsData: [
    {
      id: "1",
      message: "Hi!",
      likesCount: "1"
    },
    {
      id: "2",
      message: "My first post",
      likesCount: "23"
    },
    {
      id: "3",
      message: "Hohohoh!",
      likesCount: "1"
    },
    {
      id: "4",
      message: "Hehehe!",
      likesCount: "1"
    }
  ],
  newPostText: ""
};

export const profileReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: "5",
        message: state.newPostText,
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
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST
});
export const updateNewPostActionCreator = (value: string) => ({
  type: UPDATE_NEW_POST,
  payload: value
});
