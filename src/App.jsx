import Rate from "./Components/Rate";
import Thankyou from "./Components/Thankyou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/Rate_component/">
      <Routes>
        <Route path="/" element={<Rate />} />
        <Route path="/greet" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
