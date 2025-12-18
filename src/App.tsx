import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Registration />}></Route>
        <Route path="/home" element={<>HOME</>}></Route>
        <Route path="/leads" element={<>LEADS</>}></Route>
        <Route path="/perfil" element={<>PERFIL</>}></Route>
      </Routes>
    </Router>
  )
}

export default App
