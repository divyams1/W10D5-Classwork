import { createStore } from 'redux';
import root_reducer from '../reducers/root_reducer'

const configureStore = () => { 
    return createStore(root_reducer);
}
export default configureStore;