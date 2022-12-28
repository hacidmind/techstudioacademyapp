import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
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
import Blog from "./Pages/blog";
import BlogPage from "./Pages/blog/BlogPage";
import StudentLayout from "./Pages/student";
import Intro from "./Pages/student/intro";    
import ClassDetail from "./Pages/student/classes/slugs";
import VideoCall from "./Pages/student/classes/slugs/videocall";
// import Messages from "./student/messages";
import StudentDashboard from "./Pages/student/dashboard";
import StudentClasses from "./Pages/student/classes";
import TutorLayout from "./Pages/tutor";
import TutorDashboard from "./Pages/tutor/dashboard";
import CreateClass from "./Pages/tutor/classes";
import StudentMessages from "./Pages/student/messages";
import TutorMessages from "./Pages/tutor/messages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
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
            <Route
              exact
              path="/proceedtopayment"
              element={<ProceedToPayment />}
            />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="blogPage/:id" element={<BlogPage />} />
            <Route exact path="*" element={<ErrPage />} />
          </Route>
          {/* student dashboard routes */}
          <Route element={<StudentLayout />}>
            <Route exact path="/student" element={<Intro />} />
            <Route exact path="/student/dashboard" element={<StudentDashboard />} />
            <Route exact path="/student/classes" element={<StudentClasses />} />
            <Route exact path="/student/classes/:slugs" element={<ClassDetail />} />
            <Route exact path="/student/classes/:slugs/videocall" element={<VideoCall />} /> 
            <Route exact path="/student/messages" element={<StudentMessages />} />
            <Route exact path="*" element={<ErrPage />} />
          </Route>
            {/* tutor dashboard routes */}
            <Route element ={<TutorLayout />}>
              <Route exact path="/tutor/dashboard" element={<TutorDashboard />} />
              <Route exact path="/tutor/classes" element={<CreateClass />} />
              <Route exact path="/tutor/messages" element={<TutorMessages />} />
              <Route exact path="*" element={<ErrPage />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
