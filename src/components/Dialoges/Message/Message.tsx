import { IDialogueMess } from "../../../redux/store";
import "./../dialogues.css";

interface IProps {
  newMessageBody: string;
  myMessages: IDialogueMess[];
  addMessage: () => void;
  onHandleChanges: (value: string) => void;
}

export const Message = (props) => {
  console.log(props);
  const onHandleChanges = (event: any) => {
    props.onHandleChanges(event.target.value);
  };
  const addMessage = () => {
    if (props.newMessageBody && props.newMessageBody !== " ") {
      props.addMessage();
    }
  };
  return (
    <div className="message">
      <div className="first">
        <span>{props.asd}</span>
      </div>
      {props.myMessages.map((message) => {
        if (message.id === "0") {
          return (
            <div className="second">
              <span>{message.message}</span>
            </div>
          );
        } else return "";
      })}
      <div className="answer__container">
        <input
          value={props.newMessageBody}
          type="text"
          placeholder="Message"
          className="input__message"
          onChange={onHandleChanges}
        />
        <button onClick={addMessage} className="post__button">
          send
        </button>
      </div>
    </div>
  );
};
