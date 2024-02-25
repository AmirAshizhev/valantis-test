import api from '../api';
import Main from '../main/main';
import './app.css';

function App() {

  console.log(api.seeConfig())

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
