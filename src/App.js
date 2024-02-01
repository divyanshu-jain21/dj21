import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Component/Screens/Home1';
import Contact from './Component/Screens/Contact';
import Technology from './Component/Screens/Technology';
import Portfolio from './Component/Screens/Portfolio';
import Topbar from './Component/global/Topbar';
import Footbar1 from './Component/Screens/Footbar1';
import SocialLink from './Component/Screens/SocialLink';
import Aboutus from './Component/Screens/Aboutus';
import Bottoms from './Component/Screens/bottomToTop/Bottoms';
// import ChatBot1 from './Component/Screens/Chatbot1';

function App() {
  return (
    <>
      <div>
        {/* Use HashRouter for GitHub Pages */}
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Topbar />
          {/* <Home1 /> */}
          <SocialLink />
          <Routes>
            {/* Add a catch-all route for GitHub Pages */}
            <Route path="*" element={<Home1 />} />
            <Route path="/home/VIT:Vinitika-Infotech" element={<Home1 />} />
            <Route path="/portfolio/VIT:Vinitika-Infotech" element={<Portfolio />} />
            <Route path="/about-us/VIT:Vinitika-Infotech" element={<Aboutus />} />
            <Route path="/contact/VIT:Vinitika-Infotech" element={<Contact />} />
            <Route path="/technology/VIT:Vinitika-Infotech" element={<Technology />} />
          </Routes>
        </HashRouter>
        {/* <ChatBot1/> */}
        <Bottoms />
        <Footbar1 />
      </div>;
    </>
  );
}

export default App;
