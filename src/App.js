
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Mainpage from './Mainpage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import Main from './Main';

const mystore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {

  

  return (
    <Provider store={mystore}>
    <Main/>
    </Provider>
  );
}

export default App;
