/* localstorage */
const USER_KEY = 'user';

let saveUser = (user)=>{
    localStorage.setItem(USER_KEY,JSON.stringify(user));
}

let getUser = ()=>{
    return JSON.parse(localStorage.getItem(USER_KEY)||{})
}

let removeUser = ()=>{
    localStorage.removeItem(USER_KEY);
}

export {saveUser,getUser,removeUser}