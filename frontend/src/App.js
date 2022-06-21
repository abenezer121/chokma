import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Recent from "./components/Recent"
import Book from "./components/Books"
import Article from './components/Article'
import ArticlePage from "./components/ArticlePage"


function App() {

  
  return (
    <div className='w-full h-screen '>
      <NavBar />
      <ArticlePage/>
        {/* <Article/>
            <Home /> 
            <Recent /> 
            <Book/> 
        */}
      <Footer/>  
  
    </div>
    //
  );
}

export default App;
/*

    <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information i shoudnt see</h3> : ''}
*/