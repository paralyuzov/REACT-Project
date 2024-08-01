
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CartContext'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/home/Main'
import AboutTheTea from './components/about/about-the-tea/AboutTheTea';
import Preparing from './components/about/preparing-tea/Preparing';



function App() {

    return (
        <>
            <AuthContextProvider>
                <CardProvider>
                    <Header />
                    <div>
                        <Routes>

                            <Route path='/' element={<Main />} />
                            <Route path='/about-the-tea' element={<AboutTheTea />} />
                            <Route path='/preparing-tea' element={<Preparing />} />

                        </Routes>
                    </div>
                    <Footer />
                </CardProvider>
            </AuthContextProvider>
        </>
    )
}

export default App
