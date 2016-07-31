import { combineReducers } from 'redux';
import reducerPosts from './reducerPosts';

const rootReducer = combineReducers({
  posts: reducerPosts,
});

export default rootReducer;
