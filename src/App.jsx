// ./src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Component1 from './components/Component1';
import CountryDetail from './components/CountryDetail';
import Layout from './components/Layout.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout toggleDarkMode={toggleDarkMode} />}>
                    <Route index element={<Component1 />} />
                    <Route path='country/:countryName' element={<CountryDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
