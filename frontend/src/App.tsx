import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default App;
function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <Footer />
    </div>
  );
}