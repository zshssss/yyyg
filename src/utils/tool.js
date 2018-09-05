
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
    handleUserLogin (params) {
            // params {phone:int,password:string}
        return fetch('/login', params)
    },
    handleUserRegister (params) {
        // params {phone:int,password:string}
    return fetch('/register', params)
    }
}
