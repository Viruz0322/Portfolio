import Sidenav from './components/sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {


  return (
    <div className='bg-gray-200'>
      <Sidenav/>
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
