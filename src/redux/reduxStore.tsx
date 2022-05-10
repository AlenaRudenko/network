import { combineReducers, createStore } from "redux";
import { dialoguesReducer } from "./dialoguesReducer";
import { profileReducer } from "./profileReducer";
import { sideBarReducer } from "./sideBarReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer
});

export const store = createStore(rootReducer);
