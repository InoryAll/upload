/**
 * 根reducer
 * Created by tianrenjie on 2017/11/9
 */
import { combineReducers } from 'redux';
import { fileList } from './reducer/reducer';

export const rootReducer = combineReducers({
  fileList,
});
