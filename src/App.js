  
import Layout from "./components/Layout/Layout";
import "./App.css";
import FlowerBuilder from "./components/FlowerBuilder/FlowerBuilder"
import { Redirect, Route, Switch } from "react-router";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path="/" component={FlowerBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
