import Navbar from './components/Navbar'
import Home from './components/Home'
import Arrivals from './components/Arrivals'
import Download from './components/Download'
import Reviews from './components/Reviews'

function App() {

  return (
    <main>
      <Navbar/>
      <Home/>
      <Arrivals/>
      <Download/>
      <Reviews/>
      <div class="h-[100vh]"/>
    </main>
  )
}

export default App
