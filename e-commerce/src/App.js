import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPbpbc5lVZgcHM1H58422Enj1HAuGHOCU",
  authDomain: "ecommerce-5a5e3.firebaseapp.com",
  projectId: "ecommerce-5a5e3",
  storageBucket: "ecommerce-5a5e3.appspot.com",
  messagingSenderId: "300429810935",
  appId: "1:300429810935:web:434ee41f9841ba26a087f2",
  measurementId: "G-XQV7FVSJ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;