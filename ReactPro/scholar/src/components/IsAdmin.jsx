import jwtDecode from"jwt-decode";
function isLoggedIn() {
  return localStorage.getItem("token") ? true : false;
}
function getLoggedInUser()
{
   try{
   let token = localStorage.getItem("token");
   return jwtDecode(token);
   }catch(ex){
    return null;
   }
}
function isAdmin()
{
    if (isLoggedIn())
    {
        if (getLoggedInUser().role == "admin")
        {
            return true;
        }
        else{
            return false;
        }
    }else
    {
        return false;
    }
}
export {isLoggedIn,getLoggedInUser,isAdmin}