import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Home from './pages/home'


import './main.scss'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}