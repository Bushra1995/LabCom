// jwtUtils.js
import jwt_decode from "jwt-decode";

function getItem(token) {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  }
  
  export default getItem;
  