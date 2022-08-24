import React,{useEffect} from "react";

const App = () => {
  const onKeyDown = (e) => {
    if(e.metaKey && e.which === 13) {
      console.log("command + enter clicked");
    }
  }
  
  useEffect(() => {
    document.getElementById("test").addEventListener('keydown', onKeyDown);
    
    return () => {
        document.getElementById("test").removeEventListener('keydown', onKeyDown);
    }
  });
  
  return <textarea id="test"/>
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
