import "./App.css";
import HeaderComponent from "./Header";
import HomeComponent from "./Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
