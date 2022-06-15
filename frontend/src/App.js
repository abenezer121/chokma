import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Recent from "./components/Recent"
import Book from "./components/Books"
function App() {
  return (
    <div className='w-full h-screen '>
      <NavBar />
      <Home />
      <Recent/>
      <Footer/> 
    </div>
    //<Book/>
  );
}

export default App;
