// index.js
import { getUsernames, getPassword, authenticateUser } from './userData.js';

const  usernames = [{
    name:"Erick",Age:10,gmail:"emcytonn@gmail.com"
},
{name:"james",Age:14,gmail:"jmcytonn@gmail.com"}];
// Use the imported functions
console.log("Username:",getUsernames(usernames)); 
console.log("Password:",getPassword()); 
console.log("Note:",authenticateUser()); 
