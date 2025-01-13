import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />

          <Route path='/register' element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />

          <Route path='/account/' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />


          {/* <Route path='/account/:subpage' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } /> */}



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
