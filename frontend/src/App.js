import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Recent from "./components/Recent"
function App() {
  return (
    <div className='w-full h-screen '>
      <NavBar />
      <Home />
      <Recent/>
      <Footer/>
    </div>
  );
}

export default App;
