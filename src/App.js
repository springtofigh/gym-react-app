import './App.css';
import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero"
import JoinUs from './components/JoinUs/JoinUs';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
          <Hero />
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <JoinUs/>
          <Footer/>
    </div>
  );
}

export default App;
