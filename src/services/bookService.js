import axios from "axios";
import qs from "qs";
import { message } from "antd";
import { history } from '../utils/historyUtils'
export const addNewBook =async (user)=> {
    axios.post("http://localhost:8080/addNewBook", qs.stringify(user))
        .then(response =>{if(response.data.status===0){
            message.error(response.data.msg);
        }else{
            history.push('./homeAdmin');
            message.success(response.data.msg);
        }    })
        .catch(error=>console.log(error));
}
