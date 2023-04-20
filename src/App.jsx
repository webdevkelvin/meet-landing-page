import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import PhotoGallery from "./components/photo_gallery/PhotoGallery";
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
