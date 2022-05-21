import { IUsers, IUsersItem } from "./usersReducer";

export interface IProfile {
  postsData: IPostdataItem[];
  newPostText: string;
  profile: IApiProfile[];
}
export interface IApiProfile {
  aboutMe: string;
  contacts: IContact;
  lookingForAJob: boolean;
  lookingForAJobDescription: null;
  fullName: string;
  userId: number;
}

export interface IContact {
  facebook: null;
  website: null;
  vk: null;
}
export interface IPostdataItem {
  id: string;
  text: string;
  likesCount: string;
}
export interface IDialogue {
  messages: IDialogueMess[];
  dialoguesData: IDialogueItem[];
  newMessageBody: string;
}
export interface IDialogueItem {
  id: string;
  name: string;
}
export interface IDialogueMess {
  id: string;
  message: string;
}
export interface ISidebarItem {
  id: string;
  name: string;
  avatar: string;
}
export interface IState {
  profilePage: IProfile;
  dialoguesPage: IDialogue;
  sideBar: ISidebarItem[];
  usersPage: IUsers;
}
export interface IAction {
  type: string;
  payload?: any;
}
