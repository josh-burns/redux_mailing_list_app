import { connect } from "react-redux";
import App from "../App";

function mapStateToProps(state) {
  return {
    userInfo: state,
  };
}

export default connect(mapStateToProps)(App);
