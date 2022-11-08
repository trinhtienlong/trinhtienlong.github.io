import { Provider } from 'react-redux';
import './App.css';
import Couter from './component/Couter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Couter/>
      </div>
    </Provider>
  );
}

export default App;
