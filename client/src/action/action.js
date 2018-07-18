/**
 * action
 * Created by tianrenjie on 2017/11/9
 */
import { createAction } from 'redux-actions';
import 'whatwg-fetch';
import { GET_FILE_LIST } from '../constant/constant';

const getFileListAction = createAction(GET_FILE_LIST);

/**
 * 获取已经上传的文件列表
 */
export function getFileList() {
  return (dispatch) => {
    fetch('http://localhost: 3000/getFile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {}
      })
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      dispatch(getFileListAction({ data }));
    }).catch((e) => {
      console.log(e);
    });
  };
}

