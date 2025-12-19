import Navbar from './components/Navbar'
import Home from './components/Home'
import Arrivals from './components/Arrivals'
import Download from './components/Download'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {

  return (
    <main>
      <Navbar/>
      <Home/>
      <Arrivals/>
      <Download/>
      <Reviews/>
      <Contact/>
      <div class="h-[100vh]"/>
    </main>
  )
}

export default App
