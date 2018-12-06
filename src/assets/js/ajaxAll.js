import { Loading, Message } from 'element-react';
import 'element-theme-default';
import loadingTip from '@/assets/js/loading-tip';
import ajax from './ajax';

/**
 * @param { Object } reqArgs
 * @param { Boolean } isLoading
 * @returns { Promise<any> }
 */
function getAllAjax (reqArgs, isLoading = false) {
  let loadingInstance1;
  const sendArgs = [];

  if (isLoading) {
    loadingInstance1 = loadingTip.getLoading();
    loadingInstance1.open();
    setTimeout(() => {
      loadingInstance1.close();
    }, 5000);
  }

  for (let item of reqArgs) {
    sendArgs.push(ajax(item.url, item.param || {}, true));
  }

  return new Promise((res, rej) => {
    Promise.all(sendArgs).then((rel) => {
      if (isLoading) {
        loadingInstance1.close();
      }

      res(rel);
    }).catch((err) => {
      if (isLoading) {
        loadingInstance1.close();
      }

      console.error(err);
    })
  })
}

/**
 * @param { Object } reqArgs
 * @param { Boolean } isNotLoading
 * @returns {Promise<any>}
 */
function ajaxAll (reqArgs, isNotLoading) {
  try {
    return getAllAjax(reqArgs, isNotLoading);
  } catch (err) {
    console.error(err);
  }
}

export default ajaxAll;
