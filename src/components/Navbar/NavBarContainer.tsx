import { connect } from "react-redux";
import { IState } from "../../redux/store";
import { Navbar } from "./Navbar";

const mapStateToProps = (state: IState) => {
  return {
    sideBar: state.sideBar
  };
};

export const NavbarContainer = connect(mapStateToProps)(Navbar);
