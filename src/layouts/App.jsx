// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/page/home';
// import About from './components/page/About';
// import { GiHamburgerMenu } from "react-icons/gi";

// import './App.css';

// function App() {
//   const [showNav, setShowNav] = useState(false);

//   return (
//     <Router>
      
//       <header>
//         <div className='logo'>
//         <img src="/src/components/page/mlogo.png" alt="" />
//         </div>
//         <div className='button'>
//           {/* <img src="/src/components/page/lll.jpg" alt="" /> */}
//           <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
//         </div>
        
//       </header>

//       <Navbar show={showNav} /> {/* ส่งค่า show ไปยัง Navbar */}

//       <div className="main">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
