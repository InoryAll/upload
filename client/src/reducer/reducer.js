/**
 * reducer
 * Created by tianrenjie on 2018/7/18
 */
import { GET_FILE_LIST } from '../constant/constant';

const initState = [];

export function fileList(state = initState, action) {
  switch(action.type) {
    case GET_FILE_LIST:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
}