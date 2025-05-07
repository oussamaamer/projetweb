import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <main className="max-w-7xl mx-auto"></main>
    </>
  );
};

export default App;
