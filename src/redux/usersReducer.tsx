import { IAction } from "./store";

export interface IUsers {
  users: IUsersItem[];
  fullArray: IUsersItem[];
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
      followed: false,
      key: 0
    }
  ]
};

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const UPDATE_PAGE = "UPDATE_PAGE";

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
    default:
      return state;
  }
};
