import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Addmahasiswa from "./Component/Addmahasiswa";
import Mahasiswalist from "./Component/Mahasiswalist";
import EditMahasiswa from "./Component/EditMahasiswa";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addmahasiswa" element={<Addmahasiswa />} />
            <Route exact path="/mahasiswalist" element={<Mahasiswalist />} />
            <Route path="editmahasiswa/:id/edit" element={<EditMahasiswa />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
