import Canva from "./components/Canva/Canva";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../src/app.scss"
import LetsConnect from "./components/LetsConnect/LetsConnect";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import { useEffect, Suspense, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (!loading) {
            document.querySelector('.fade-in-content').classList.add('show');
        }
    }, [loading]);

    return (
        <>
            <Suspense fallback={<Loader />}>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="fade-in-content">
                        <Canva />
                        <Router>
                            <Header />
                            <Routes>
                                <Route path='/' element={<Homepage />} />
                                <Route path='services' element={<Services />} />
                                <Route path='aboutUs' element={<AboutUs />} />
                                <Route path='letsConnect' element={<LetsConnect />} />
                            </Routes>
                            <Footer />
                        </Router>
                    </div>
                )}
            </Suspense>
        </>
    );
}

export default App;