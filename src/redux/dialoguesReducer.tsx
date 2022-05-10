import { IAction, IDialogue } from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState: IDialogue = {
  messages: [
    {
      id: "1",
      message: "yo"
    },
    {
      id: "2",
      message: "вставай жить жизнь"
    },
    {
      id: "3",
      message: "hello"
    },
    {
      id: "4",
      message: "hohoho"
    },
    {
      id: "5",
      message: "yoooo"
    },
    {
      id: "6",
      message: "hihihihi"
    }
  ],
  dialoguesData: [
    {
      id: "1",
      name: "Artur"
    },
    {
      id: "2",
      name: "Alf"
    },
    {
      id: "3",
      name: "Anya"
    },
    {
      id: "4",
      name: "Misha"
    },
    {
      id: "5",
      name: "Maksim"
    }
  ],
  newMessageBody: ""
};

export const dialoguesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.payload
      };
    }
    case SEND_MESSAGE: {
      const newMessage = {
        id: "0",
        message: state.newMessageBody
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    }
    default:
      return state;
  }
};
export const updateNewMessageBodyCreator = (value: string) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  payload: value
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});
