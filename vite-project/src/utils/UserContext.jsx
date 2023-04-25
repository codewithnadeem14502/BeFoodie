import {createContext} from 'react'

const UserContext = createContext ({
user:{
 name:"Dummy ",
 email:"dummmmmmmmmy@gmail.com"
},
});
UserContext.displayName = "UserContext"; 
export default UserContext;