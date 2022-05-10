import { IAction } from "./store";

export interface IUsers {
  users: IUsersItem[];
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
}

export interface ILocation {
  country: string;
  city: string;
}

const initialState: IUsers = {
  users: [
    {
      name: "AlenaRudenko",
      id: 1223,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null
      },
      status: null,
      followed: false
    }
  ]
};

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";

export const changeFollow = (id) => ({
  type: CHANGE_FOLLOW,
  payload: id
});
export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
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
        users: [...state.users, ...action.payload]
      };
    }
    default:
      return state;
  }
};
