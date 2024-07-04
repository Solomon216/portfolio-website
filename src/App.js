import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Tabs from './components/Tabs';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Hero');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Profile':
        return <Profile />;
      case 'Tabs':
        return <Tabs setCurrentComponent={setCurrentComponent} />;  
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return(
          <div>
            <Hero />
            <MobileMenu setCurrentComponent={setCurrentComponent} />
          </div>
        );
    }
  };


  return (
    <div className="App">
      <Navbar setCurrentComponent={setCurrentComponent} />
      <MobileNavbar setCurrentComponent={setCurrentComponent} />
      {renderComponent()}
    </div>
  );
}

export default App;
