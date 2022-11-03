import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./Pages/About";
import Layout from "./hocs/Layout";
import ErrPage from "./components/ErrPage";
import Frontend from "./Pages/Frontend";
import DataScience from "./Pages/DataScience";
import Fullstack from "./Pages/Fullstack";
import MobileDev from "./Pages/MobileDev";
import UIUX from "./Pages/UIUX";

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<About />} />
            <Route exact path="/frontend" element={<Frontend />} />
            <Route exact path="/data-science" element={<DataScience />} />
            <Route exact path="/fullstack" element={<Fullstack />} />
            <Route exact path="/mobile-development" element={<MobileDev />} />
            <Route exact path="/ui-ux" element={<UIUX />} />
            <Route exact path="*" element={<ErrPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
