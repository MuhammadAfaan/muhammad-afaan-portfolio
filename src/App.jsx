import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // Import the new component
import Footer from './components/Footer';
import Education  from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About /> {/* Add the About component here */}
        <Education /> {/* Add the Education component here */}
        <Experience /> {/* Add the Experience component here */}
        <Projects /> {/* Add the Projects component here */}
        <Skills />
        <Certifications /> {/* Add the Certifications component here */}
        <Contact /> {/* Add the Contact component here */}
        {/* Add other components like Skills, Certifications, Contact as needed */}
        {/* Add other components like Projects, Skills, Certifications, Contact as needed */}
      </main>
      <Footer />
    </>
  );
}

export default App;