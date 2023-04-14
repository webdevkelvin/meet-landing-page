import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <PhotoGallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
