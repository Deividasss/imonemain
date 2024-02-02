import Canva from "./components/Canva/Canva";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../src/app.scss"
import LetsConnect from "./components/LetsConnect/LetsConnect";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Canva />
            <Router>
                <Header />
                <Routes>
                    <Route>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='letsConnect' element={<LetsConnect />} />
                    </Route>
                </Routes>
                <Footer />
            </Router >
        </>
    );
}

export default App;