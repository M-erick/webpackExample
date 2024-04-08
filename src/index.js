// index.js
import { getUsername, getPassword, authenticateUser } from './userData.js';
import displayImage from './ticketing.jpeg';

// Use the imported functions
console.log("Username:",getUsername()); 
console.log("Password:",getPassword()); 
console.log("Note:",authenticateUser()); 
