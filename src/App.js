import "./App.css";
import SignupCardContainer from "./components/SignupCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO make signupcard conditional on if isCreated is false */}
        <SignupCardContainer></SignupCardContainer>
      </header>
    </div>
  );
}

export default App;
