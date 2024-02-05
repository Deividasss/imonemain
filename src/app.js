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
        }, 30000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <><Suspense fallback={
            <Loader />
        }>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Canva />
                    <Router>
                        <Header />
                        <Routes>
                            <Route>
                                <Route exact path='/' element={<Homepage />} />
                                <Route exact path='services' element={<Services />} />
                                <Route exact path='aboutUs' element={<AboutUs />} />
                                <Route exact path='letsConnect' element={<LetsConnect />} />
                            </Route>
                        </Routes>
                        <Footer />
                    </Router >
                </>
            )}
        </Suspense>
        </>
    );
}

export default App;