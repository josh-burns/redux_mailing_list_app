import { connect } from "react-redux";
import App from "../App";

function mapStateToProps(state) {
  return {
    userInfo: state,
    duplicate: state.duplicate,
  };
}

export default connect(mapStateToProps)(App);
