import classes from "./App.module.scss";
import Router from "../../routes/Router";
function App() {
  return (
    <div className={classes.App}>
      <Router />
    </div>
  );
}

export default App;
