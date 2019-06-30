import decode from 'jwt-decode'

function userIsLoggedIn(){
    let userToken = localStorage.getItem("userToken");
    if(userToken == null){
        return false;
    }

    return true;
}

function logoutUser(){
    localStorage.removeItem('userToken');
    window.location.reload();
}

function getUserDetails(){
    let userToken = localStorage.getItem("userToken");
    return decode(userToken)
}

export {
    userIsLoggedIn,
    getUserDetails,
    logoutUser,
}