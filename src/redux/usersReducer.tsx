import { IAction } from "./store";

export interface IUsers {
  users: IUsersItem[];
  fullArray: IUsersItem[];
  isFetching: boolean;
}
export interface IUsersItem {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: null;
    large: null;
  };
  status: null;
  followed: boolean;
  key: number;
}

export interface ILocation {
  country: string;
  city: string;
}

const initialState: IUsers = {
  fullArray: [],
  users: [],
  isFetching: false
};

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const UPDATE_PAGE = "UPDATE_PAGE";
const TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING";

export const changeFollow = (id) => ({
  type: CHANGE_FOLLOW,
  payload: id
});
export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});
export const updatePage = () => ({
  type: UPDATE_PAGE
});
export const setIsFetching = (value: IUsers["isFetching"]) => ({
  type: TOGGLE_ISFETCHING,
  payload: value
});
export const usersReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHANGE_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: !user.followed };
          } else return user;
        })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        fullArray: [...state.fullArray, ...action.payload],
        users: [...state.users, ...action.payload].filter(
          (item, index) => index <= 3
        )
      };
    }
    case UPDATE_PAGE: {
      let result = state.fullArray.filter(
        (item, index) => index > 3 && index <= 7
      );
      return {
        ...state,
        users: [...result]
      };
    }
    case TOGGLE_ISFETCHING: {
      return {
        ...state,
        isFetching: action.payload
      };
    }
    default:
      return state;
  }
};
