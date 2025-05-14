import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/main";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div className="">
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
