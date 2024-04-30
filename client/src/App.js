import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import NewClothing from "./pages/newClothing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <NewClothing></NewClothing>
    </div>
  );
}

export default App;
