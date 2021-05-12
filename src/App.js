import Layout from "./components/Layout/Layout";
import "./App.css";
import FlowerBuilder from "./components/FlowerBuilder/BouquetBuilder"
import { Redirect, Route, Switch } from "react-router";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path="/" component={FlowerBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
