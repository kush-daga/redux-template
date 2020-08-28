import React from "react";
import CakeContainer from "./components/CakeContainer";
import UserContainer from "./components/UserContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
//Wheres rider lol
function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
