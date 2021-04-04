  
import Layout from "./components/Layout/Layout";
import "./App.css";
import FlowerBuilder from "./components/FlowerBuilder/FlowerBuilder"

function App() {
  return (
    <div className="App">
      <Layout>
        <FlowerBuilder />
      </Layout>

    </div>
  );
}

export default App;
