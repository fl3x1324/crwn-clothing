import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import {
  auth,
  createUserProfileDocument,
  updateLastLogin,
} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await updateLastLogin(userAuth.uid, new Date());
        userRef.onSnapshot((snapShot) =>
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          })
        );
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
