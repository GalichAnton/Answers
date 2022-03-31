import classes from "./App.module.scss";
import Router from "../../routes/Router";
import { Provider } from "react-redux";
import { store } from "../../store/store";
function App() {
  return (
    <div className={classes.App}>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
