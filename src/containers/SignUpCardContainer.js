import { connect } from "react-redux";
import SignUpCard from "../components/SignupCard";
import { submitNewUserInfo } from "../actions/index";

function mapStateToProps(state) {
  return {
    messages: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
  submitNewUserInfo: (info) => dispatch(submitNewUserInfo(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
