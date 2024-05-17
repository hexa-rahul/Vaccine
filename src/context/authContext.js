// authContext.js
import { createContext } from "react";
const user = localStorage.getItem('user')
const AuthContext = createContext(null); // Initialize the context with null

export default AuthContext;
