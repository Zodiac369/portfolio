import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fond de l'écran */}
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Conteneur principal */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
