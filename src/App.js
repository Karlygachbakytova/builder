import Layout from "./components/Layout/Layout";
import "./App.css";
import FlowerBuilder from "./components/FlowerBuilder/FlowerBuilder"
import { Redirect, Route, Switch } from "react-router";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path="/" component={FlowerBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
