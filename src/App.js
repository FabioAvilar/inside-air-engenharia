import "./App.css";
import "./Root.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home/home";
import { Sobre } from "./pages/sobre/sobre";
import { Projetos } from "./pages/projetos/projetos";
import { Contato } from "./pages/contato/contato";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />   
                    <Route path="/Sobre" element={<Sobre />} />
                    <Route path="/Projetos" element={<Projetos />} />
                    <Route path="/Contato" element={<Contato />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
