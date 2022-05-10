export interface IProfile {
  postsData: IPostdataItem[];
  newPostText: string;
}
export interface IPostdataItem {
  id: string;
  message: string;
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
}
export interface IAction {
  type: string;
  payload?: any;
}
