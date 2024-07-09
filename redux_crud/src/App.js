import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import Tutorial from './Tutorial';

function App() {
  return (
   <>

    <Provider store={store}>
      <Tutorial/>
    </Provider>
   
   </>
  );
}

export default App;
