import { AppWrapper } from './context/context';
import Home from './home';
import Home2 from './home2';

function App() {
  return (
    <AppWrapper>
      <div>
        <Home/>
        <Home2/>
        Hola
      </div>
    </AppWrapper>

  );
}

export default App;
