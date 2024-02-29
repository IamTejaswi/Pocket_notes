import { useEffect } from 'react';
import './App.css'
import DesktopView from './view/DesktopView';
import { Provider } from "./context/PocketContext";
import usePocketContext from './context/useContext';
function App() {
   const { selected, setSelected } = usePocketContext();
  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  return (
    <Provider>
      <div className='App'>
       <DesktopView/>
      </div>
    </Provider>
  );
}

export default App
