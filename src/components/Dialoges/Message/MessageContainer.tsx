// контейнер сообщения

import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../../redux/dialoguesReducer";
import { IDialogueMess } from "../../../redux/store";

import { Message } from "./Message";

interface IProps {
  message: IDialogueMess["message"];
}

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialoguesPage.newMessageBody,
    myMessages: state.dialoguesPage.messages
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onHandleChanges: (value: string) => {
      dispatch(updateNewMessageBodyCreator(value));
    },
    addMessage: () => {
      dispatch(sendMessageCreator());
      dispatch(updateNewMessageBodyCreator(""));
    }
  };
};
export const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
