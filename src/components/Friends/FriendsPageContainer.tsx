import { connect } from "react-redux";
import { IState } from "../../redux/store";
import { FriendsPage } from "./FriendsPage";

const mapStateToProps = (state: IState) => {
  return {
    sideBar: state.sideBar
  };
};
export const FriendsPageContainer = connect(mapStateToProps)(FriendsPage);
