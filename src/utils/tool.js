
import axios from 'axios'

export const fetch = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
    handleUserLogin (url,params) {
        // params {phone:int,password:string}
        return fetch(url, params)
    },
    handleUserRegister (url,params) {
        // params {phone:int,password:string}
        return fetch(url, params)
    },
}
