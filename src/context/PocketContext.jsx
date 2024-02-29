import React from 'react'
import { createContext,useState } from 'react'
const PocketContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({children})=>{
    const [selected, setSelected] = useState("");
    const [notes,setNotes]=useState([]);
  return (
    <div>
      <PocketContext.Provider value={ {notes , setNotes, selected , setSelected}}>
        {children}
      </PocketContext.Provider>
    </div>
  )
  }

export default PocketContext
 export { Provider }