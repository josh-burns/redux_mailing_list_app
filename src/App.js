import "./App.css";
import SignupCardContainer from "./components/SignupCard";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO make signupcard conditional on if isCreated is false */}
        {props.userInfo[0] ? (
          <div>
            <div>
              <h1>Thanks for signing up!</h1>
              <h3> Please see details below:</h3>
            </div>
            <ul>
              <li> Name: {props.userInfo[0].name}</li> <br />
              <li> email: {props.userInfo[0].email}</li>
            </ul>
          </div>
        ) : (
          <SignupCardContainer></SignupCardContainer>
        )}
      </header>
    </div>
  );
}

export default App;
