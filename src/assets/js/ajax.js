import CONFIG from '@/assets/js/config';
import { connect } from 'react-redux';
import { userMsg } from '@/redux/user/reducer';
import { createHashHistory } from 'history'
import { Message } from 'element-react';
import loadingTip from '@/assets/js/loading-tip';
import 'element-theme-default';

/**
 * @param { String } api
 * @param { Object } sendData
 * @param { Boolean } isLoading
 * @returns { Promise }
 */
function ajax (api, sendData = {}, isLoading = false) {
  try {
    let loadingInstance;

    if (isLoading) {
      loadingInstance = loadingTip.getLoading();
      loadingInstance.open();
    }

    const sendUrl = apiFilter(api);
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('post', sendUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.send(JSON.stringify(sendData));

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (isLoading) {
            loadingInstance.close();
          }

          if (xhr.status === 200) {
            const resData = JSON.parse(xhr.responseText);

            if (resData.statusCode === 200) {
              resolve(resData);
            } else {
              if (resData.statusCode === 401) {
                // Link to login page
                // createHashHistory().push("/login");
                return;
              }

              if (resData.message) {
                Message({
                  showClose: true,
                  message: resData.message,
                  type: 'error'
                })
              } else {
                if (isLoading) {
                  loadingInstance.close();
                }
                console.error('Request failed, resData: ' + JSON.stringify(resData));
                console.error(resData);
                console.error('--------------------------------');
                reject(resData);
              }
            }
          } else {
            Message({
              showClose: true,
              message: '请求失败, 请检查网络或重试',
              type: 'error'
            });

            if (isLoading) {
              loadingInstance.close();
            }

            console.error('Request failed, status code: ' + xhr.status);
          }
        }
      };
    });

  } catch (err) {
    console.error(err)
  }
}

/**
 * @param { String } api
 * @returns { String }
 */
function apiFilter (api) {
  if (!api) throw new Error('Please input legal api');

  let sendUrl = '';

  if (api.startsWith('http') || api.startsWith('//')) {
    sendUrl = api;
  } else {
    if (api.startsWith('/')) {
      sendUrl = CONFIG.DOMAIN + api;
    } else {
      sendUrl = CONFIG.DOMAIN + '/' + api;
    }
  }

  return sendUrl;
}

export default ajax;
