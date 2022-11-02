
import logo from './images/logo.svg'
import '../src/css/app.css';
import CalculatorTipsContainer from './components/CalculatorTipsContainer';
function App() {
  return (
    <div className="main">
      <div className='logo'>
        <img src={logo}/>
      </div>
      <CalculatorTipsContainer />
      
      
    </div>
  );
}

export default App;
