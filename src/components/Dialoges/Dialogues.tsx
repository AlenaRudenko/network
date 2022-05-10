import "./dialogues.css";
import { DialogItem } from "./DialogItem/DialogItem";

import { Routes, Route } from "react-router-dom";
import { MessageContainer } from "./Message/MessageContainer";
import { IDialogueItem, IDialogueMess, ISidebarItem } from "../../redux/store";

interface IProps {
  sideBar: ISidebarItem[];
  dialoguesData: IDialogueItem[];
  messages: IDialogueMess[];
}

// компонент диалогов
export const Dialogues = ({ sideBar, dialoguesData, messages }: IProps) => {
  let messagesElements = messages.map((message) => (
    <Route
      path={message.id}
      element={<MessageContainer asd={message.message} />}
    />
  ));

  return (
    <div className="dialogues">
      <div className="dialogues__items">
        {dialoguesData.map((dialogue) => (
          <DialogItem
            user={sideBar.find((item) => item.id === dialogue.id)}
            name={dialogue.name}
            id={dialogue.id}
          />
        ))}
      </div>
      <div className="messages">
        <Routes>{messagesElements}</Routes>
        <div> </div>
      </div>
    </div>
  );
};
