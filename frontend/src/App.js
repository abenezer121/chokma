import RootPage from "./pages";
import Admin from "./pages/Admin";
import { useSelector , useDispatch} from 'react-redux'

function App() {
  const navState = useSelector(state => state.usertype)
  return (
    <RootPage /> 
  );
}

export default App;
