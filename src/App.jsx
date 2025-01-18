import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import GenderReveal from './pages/genderReveal';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<MainPage />} />
        <Route path="/events/genderReveal/" component={<GenderReveal />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainPage = () => (
  <div className="relative z-0">
    <div>
      <Navbar />
      <Hero />
    </div>

    <div className="bg-about bg-cover bg-center bg-no-repeat">
      <About />
    </div>

    <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
      <Tech />
    </div>

    <Projects />

    <div
      className="bg-experience bg-cover bg-center bg-no-repeat 
        rounded-tl-[150px] rounded-br-[150px]">
      <div
        className="bg-experienceLight bg-cover bg-center 
        bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
        <Experience />
      </div>
    </div>
    <div className="relative z-0">
      <Contact />
    </div>
  </div>
);

export default App;