// import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import {Routes, Route} from 'react-router-dom';
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Connexion from './components/connexion/Connexion';
// import Lost from './components/lost/Lost';
// import Inscription from './components/inscription/Inscription';
// import Bienvenue from './components/bienvenue/Bienvenue';


// function App() {
//   return (
//     <div className='App'>
//        <NavBar />
//        <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/connexion' element={<Connexion />} />
//         <Route path='/lost' element={<Lost />} />
//         <Route path='/inscription' element={<Inscription />} />
//         <Route path='/bienvenue' element={<Bienvenue />} />
//        </Routes>
//     </div>
//   )
// }

// export default App;

import './App.css';
// import NavBar from './components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Connexion from './components/connexion/Connexion';
import Lost from './components/lost/Lost';
import Inscription from './components/inscription/Inscription';
import Bienvenue from './components/bienvenue/Bienvenue';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/lost' element={<Lost />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/bienvenue' element={<Bienvenue />} />
      </Routes>
    </div>
  );
}

export default App;
