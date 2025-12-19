import Navbar from './components/Navbar'
import Home from './components/Home'
import Arrivals from './components/Arrivals'
import Download from './components/Download'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar/>
      <Home/>
      <Arrivals/>
      <Download/>
      <Reviews/>
      <Contact/>
    </main>
  )
}

export default App
