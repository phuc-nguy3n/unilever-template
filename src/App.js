import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className='app h-screen'>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
