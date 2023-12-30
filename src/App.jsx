import './assets/scss/App.css'
import Home from './assets/pages/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MediaList from './assets/pages/MediaList'
import Details from './assets/components/Details'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:query?" element={<MediaList />} />
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
