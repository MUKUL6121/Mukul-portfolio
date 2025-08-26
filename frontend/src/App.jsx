import './App.css'
import Header from './componets/header/header'
import Main from './componets/main/main'
import Footer from './componets/footer/footer'
import Contact from './componets/others/contactme.jsx'
import Projects from './componets/main/C/C.jsx'
import Feedback from './componets/others/feedback.jsx'
import Certificate from './componets/others/certificate.jsx'
import { useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  useEffect(() => {
    const url = "https://portfolio-backend-v7nt.onrender.com";
    axios.get(url)
      .then(() => {
        console.log("connected to backend");
      });
  },[])
  return (
    <Router>
      <div id="root">
        {/* Header */}
        <div className="root-header">
          <Header />
        </div>

        {/* Main Content */}
        <div id="root-main" className="container">
          <div id="appcontainer">
            <div id="main">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contactMe" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/feedbacks" element={<Feedback />} />
                <Route path="/certificate" element={<Certificate />} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="root-footer">
          <div className="footer-fixed">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
