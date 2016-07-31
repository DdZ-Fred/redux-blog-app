import { combineReducers } from 'redux';
import reducerPosts from './reducerPosts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: reducerPosts,
  form: formReducer,
});

export default rootReducer;
