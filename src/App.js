import Portuguese_defined from "./Portuguese_defined.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="Wrapper">
      <header className="App">
        <a href={Portuguese_defined} target="_blank" rel="noreferrer">
        <img src={Portuguese_defined} className="App-logo rounded-corners img-fluid" alt="logo" />
        </a>
      </header>
      
        <div className="App-topper">
          <h1>DICTIONARY</h1>
            <div className="Question">
              <span><strong>"What word are you curious about ?"</strong></span> 
            </div>
          
           <main>
             <Dictionary defaultKeyword="test" />
           </main>
             <footer>
              <strong>Coded by Jennifer Griffin and {" "}
                <a href="https://github.com/coderGriff66/react-dictionary-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a> </strong>
            </footer>
         </div>   
      </div>
      </div>
    </div>
  );
}


