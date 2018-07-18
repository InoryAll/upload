/**
 * action
 * Created by tianrenjie on 2017/11/9
 */
import { createAction } from 'redux-actions';
import { GET_FILE_LIST } from '../constant/constant';
import config from '../../../config';

import 'whatwg-fetch';

const getFileListAction = createAction(GET_FILE_LIST);

/**
 * 获取已经上传的文件列表
 */
export function getFileList() {
  return (dispatch) => {
    fetch('http://'+config.host+'/back/getFile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      dispatch(getFileListAction({ data }));
    }).catch((e) => {
      console.log(e);
    });
  };
}

