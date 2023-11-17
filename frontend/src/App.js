import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Router from './pages/router'


import './main.scss'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <Router />
      </div>
    </div>
  )
}