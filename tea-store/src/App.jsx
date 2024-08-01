
import './App.css'
import Header from './components/header/Header'

import { AuthContextProvider } from './contexts/AuthContext'
import { CardProvider } from './contexts/CartContext'

function App() {

  return (
    <>
      <AuthContextProvider>
        <CardProvider>
          <Header/>
        </CardProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
