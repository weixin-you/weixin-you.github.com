
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Donate from './pages/Donate'
import OngoingProjects from './pages/OngoingProjects'
import PastProjects from './pages/PastProjects'

function App() {
  return  (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/past-projects" element={<PastProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;