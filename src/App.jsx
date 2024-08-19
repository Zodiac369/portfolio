import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fond de l'écran */}
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Conteneur principal */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </div>
  );
};

export default App;
