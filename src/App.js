import "./App.css";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Consultation from "./components/Consultation";
import Help from "./components/Help";
import Free from "./components/Free";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="App">
      <Home />
      <Cards />
      <Consultation />
      <Help />
      <Free />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
