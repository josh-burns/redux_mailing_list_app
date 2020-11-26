import "./App.css";
import SignupCardContainer from "./components/SignupCard";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.userInfo.newUser.isCreated === false ? (
          <SignupCardContainer></SignupCardContainer>
        ) : null}

        {props.userInfo.newUser[0] && !props.duplicate.isDuplicate ? (
          <div>
            <div>
              <h1>Thanks for signing up!</h1>
              <h3> Please see details below:</h3>
            </div>
            <ul>
              <li> Name: {props.userInfo.newUser[0].name}</li> <br />
              <li> email: {props.userInfo.newUser[0].email}</li>
            </ul>
          </div>
        ) : null}

        {props.duplicate.isDuplicate ? (
          <div>
            <h1> Oops!</h1>
            <br />
            This email address is already on the list - please review your
            submission
            <br />
            <a href="/">
              <button> back</button>
            </a>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
