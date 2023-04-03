// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Tushar"
function App() {
  return (
    <>
      
<Navbar/>
{/* <Navbar title="TextUtils" about="about us"/> */}
<div className="container my-3">
<TextForm heading="Enter the text to analyse"/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
