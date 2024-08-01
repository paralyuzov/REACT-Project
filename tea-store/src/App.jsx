
import './App.css'
import Header from './components/header/Header'
import Main from './components/home/Main'

import { AuthContextProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CartContext'

function App() {

  return (
    <>
      <AuthContextProvider>
        <CardProvider>
          <Header />
          <div>
            <Main />
          </div>
        </CardProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
