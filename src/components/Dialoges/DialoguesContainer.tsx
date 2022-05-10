import { connect } from "react-redux";
import { IState } from "../../redux/store";
import { Dialogues } from "./Dialogues";

const mapStateToProps = ({ dialoguesPage, sideBar }: IState) => ({
  dialoguesData: dialoguesPage.dialoguesData,
  messages: dialoguesPage.messages,
  sideBar
});

export const DialoguesContainer = connect(mapStateToProps)(Dialogues);
