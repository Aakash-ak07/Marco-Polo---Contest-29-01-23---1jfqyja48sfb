import React,{useState} from 'react'
import '../styles/App.css';

const App = () => {
  const[marcoPolo, setMarcoPolo] = useState("Marco");
  const[marcoPoloToggler, setMarcoPoloToggler] = useState("Polo");

  const togglerMarcoPolo = () => {
    marcoPolo === "Marco" ? setMarcoPolo("Polo") : setMarcoPolo("Marco");
    marcoPoloToggler ==="Polo" ? setMarcoPoloToggler("Marco") : setMarcoPoloToggler("Polo");
  };

  return (
    <div id="main">
      <h1 id='marco-polo'>{marcoPolo}</h1>
      <button id="marco-polo-toggler" onClick={togglerMarcoPolo}>{marcoPoloToggler}</button>
    </div>
  )
}


export default App;
