import React from 'react'
import ReactDOM from 'react-dom/client'
//css
import './variable.css'
// import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import WelcomePage from './pages/welcomePage/index'
import LoginLayout from './pages/layout/LoginLayout'

import LoginPage from './pages/loginPage/login'
import CadastrarPage from './pages/loginPage/cadastrar'
import RecuperarSenhaPage from './pages/loginPage/RecuperarSenha'
import HomePage  from './pages/layout/HomeLayout'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <WelcomePage /> } />

        <Route path='login' element={ <LoginLayout /> }>
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='cadastrar' element={ <CadastrarPage /> } />
          <Route path='recuperar-senha' element={ <RecuperarSenhaPage /> } />
        </Route>
        <Route path='home' element={ <HomePage /> } />
    </Routes>
  </BrowserRouter>
)
