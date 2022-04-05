import {Route, Routes, HashRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SearchPage from "./pages/SearchPage/SearchPage";
import StockDetail from "./pages/StockDetail/StockDetail";
import Navigation from "./components/Layout/Navigation/Navigation";

function App() {
  return (
      <HashRouter>
        <Navigation />
        <Layout>
          <Routes>
            <Route  path="/" element={<SearchPage />}/>
            <Route  path="/detail/:symbol" element={<StockDetail />}/>
          </Routes>
        </Layout>
      </HashRouter>
  );
}

export default App;
