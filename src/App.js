import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Component/Screens/Home1';
import Contact from './Component/Screens/Contact';
import Technology from './Component/Screens/Technology';
import Portfolio from './Component/Screens/Portfolio';
import Topbar from './Component/global/Topbar';
import Footbar1 from './Component/Screens/Footbar1';
import SocialLink from './Component/Screens/SocialLink';
import Aboutus from './Component/Screens/Aboutus';
import Bottoms from './Component/Screens/bottomToTop/Bottoms';

function App() {
  return (
    <Router>
      <Topbar />
      <SocialLink />
      <Routes>
        {/* Home page is set as the default route */}
        <Route path="/" element={<Home1 />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      {/* Other components (e.g., ChatBot1) can be added outside the Routes */}
      {/* <ChatBot1 /> */}
      <Bottoms />
      <Footbar1 />
    </Router>
  );
}

export default App;

// import './App.css';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Home1 from './Component/Screens/Home1';
// import Contact from './Component/Screens/Contact';
// import Technology from './Component/Screens/Technology';
// import Portfolio from './Component/Screens/Portfolio';
// import Topbar from './Component/global/Topbar';
// import Footbar1 from './Component/Screens/Footbar1';
// import SocialLink from './Component/Screens/SocialLink';
// import Aboutus from './Component/Screens/Aboutus';
// import Bottoms from './Component/Screens/bottomToTop/Bottoms';
// // import ChatBot1 from './Component/Screens/Chatbot1';



// function App() {
//   return (
//     <>
//     <Router>
//     <Topbar/>
//     <SocialLink/>
//       <Routes>
//       <Route path="/" element={<Home1/>} />
//       <Route path="/home/VIT:Vinitika-Infotech" element={<Home1/>} />
//       <Route path="/portfolio/VIT:Vinitika-Infotech" element={<Portfolio/>} />
//       <Route path="/about-us/VIT:Vinitika-Infotech" element={<Aboutus/>} />
//       <Route path="/contact/VIT:Vinitika-Infotech" element={<Contact/>} />
//       <Route path="/technology/VIT:Vinitika-Infotech" element={<Technology/>} />
//       </Routes>
//     </Router>
//     {/* <ChatBot1/> */}
//     <Bottoms/>

//       <Footbar1/>
//       <div>
        
//       </div>
//     </>
//   );
// }

// export default App;
