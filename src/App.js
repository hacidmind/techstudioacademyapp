import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./hocs/Layout";
import Home from "./Pages/home";
import About from "./Pages/about";
import Frontend from "./Pages/frontend";
import DataScience from "./Pages/dataScience";
import MobileDev from "./Pages/mobileDev";
import UIUX from "./Pages/UIUX";
import Contact from "./Pages/contact";
import Fullstack from "./Pages/fullstack";
import ErrPage from "./Pages/404/ErrPage";
import Olt from "./Pages/ourlearningtrack";
import Page14 from "./Pages/page14";
import Page15 from "./Pages/page15";
import SignUp from "./Pages/signUp";
import SignIn from "./Pages/signIn";
import MakePayment from "./Pages/makePayment";
import ProceedToPayment from "./Pages/proceedToPayment";

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
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/olt" element={<Olt />} />
            <Route exact path="/employers" element={<Page14 />} />
            <Route exact path="/page15" element={<Page15 />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/makepayment" element={<MakePayment />} />
            <Route exact path="/proceedtopayment" element={<ProceedToPayment />} />
            <Route exact path="*" element={<ErrPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
