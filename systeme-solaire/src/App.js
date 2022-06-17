import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import SystemSolar from "./components/SystemSolar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="composant-container">
        <Introduction />
        <div className="separate-container">
          <div className="bar-separate"></div>
        </div>
      </div>
      <div className="composant-container">
        <SystemSolar />

        <div className="separate-container">
          <div className="bar-separate"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
