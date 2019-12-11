import {createStore, combineReducers} from 'redux';
import reducer from '../reduxsauce';
import reduxStore from '../redux/reducers/TaskList';

const store = createStore(
  combineReducers({
    reducer,
    reduxStore,
  }),
);

// Enable persistence
export default {store};
