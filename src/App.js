import "./App.css";
import HeaderComponent from "./Header";
import HomeComponent from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
