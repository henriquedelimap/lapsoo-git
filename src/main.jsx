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
import {Dashboard} from './pages/layout/HomeLayout/DashboardLayout/index'
import {Chat} from './pages/layout/HomeLayout/ChatLayout/index'
import { Configuracao } from './pages/layout/HomeLayout/ConfiguracaoLayout'
import { Inicio } from './pages/layout/HomeLayout/InicioLayout'

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
        <Route path='home' element={ <HomePage /> } >
          <Route path='inicio' element= { <Inicio /> } />
          <Route path='dashboard' element= { <Dashboard /> } />
          <Route path='chat' element= { <Chat /> } />
          <Route path='configuracao' element= { <Configuracao /> } />

          
        </Route>
    </Routes>
  </BrowserRouter>
)
