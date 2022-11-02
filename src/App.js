import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './Pages/About';
import Layout from './hocs/Layout';
import ErrPage from './components/ErrPage';
import Courses from './Pages/Courses';

const App = ()=> {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about-us' element={<About />} />
            <Route exact path='/courses' element={<Courses />} />
            <Route exact path='*' element={<ErrPage />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
