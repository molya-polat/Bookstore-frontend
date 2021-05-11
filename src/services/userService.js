import axios from "axios";
import qs from "qs";
import { message } from "antd";
import { history } from '../utils/historyUtils'
import { saveUser } from '../utils/storageUtils'

export const login = async (user)=> {
    axios.post("http://localhost:8080/login", qs.stringify(user))
        .then(response =>{
            if(response.data.status===0){
                message.error(response.data.msg);
            }else if (response.data.status===1){
                saveUser(user);
                history.push('./home');
                message.success(response.data.msg);
            }
            else if (response.data.status===2){
                saveUser(user);
                history.push('./homeAdmin');
                message.success(response.data.msg);
            }
            else if (response.data.status===-1){
                history.push('./disabledUser');
            }
        })
        .catch(error=>console.log(error));
};
export const register = async (user)=> {
    axios.post("http://localhost:8080/register", qs.stringify(user))
        .then(response =>{
            if(response.data.status===1) {
                history.push('./successRegister');
            }
            else{
                history.push('./usernameExists');
            }  })
        .catch(error=>console.log(error));
}

