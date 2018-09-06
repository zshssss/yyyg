
import axios from 'axios'
function fetch( url, method,params,tk='') {
  return new Promise((resolve, reject) => {    
      let obj={
        method:method,
        url:url,
        headers:{
          token:tk
        }
      };

      if (method=='GET') {
        obj.params=params
      } else {
        obj.data=params
      }

      axios(obj).then((response)=>{
        resolve(response)
        }).catch((error) => {
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
    handleAddAdress(url,params){
        return fetch(url, params)
    },
    fetch: fetch
}
