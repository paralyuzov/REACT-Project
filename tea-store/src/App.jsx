
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CartContext'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/home/Main'
import AboutTheTea from './components/about/about-the-tea/AboutTheTea';
import Preparing from './components/about/preparing-tea/Preparing';
import PrepSencha from './components/about/preparing-tea/sencha/PrepSencha';
import PrepGyokuro from './components/about/preparing-tea/gyokuro/PrepGyokuro';
import PrepMatcha from './components/about/preparing-tea/matcha/PrepMatcha';



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
                            <Route path='/preparing-tea/sencha' element={<PrepSencha />} />
                            <Route path='/preparing-tea/gyokuro' element={<PrepGyokuro />} />
                            <Route path='/preparing-tea/matcha' element={<PrepMatcha />} />

                        </Routes>
                    </div>
                    <Footer />
                </CardProvider>
            </AuthContextProvider>
        </>
    )
}

export default App
