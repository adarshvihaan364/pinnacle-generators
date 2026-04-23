import { useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <Toaster />
    </div>
  );
}

export default App;