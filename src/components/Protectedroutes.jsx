import { useLocation, useNavigate } from "react-router-dom";
import { decodeJwt } from "../middelwares";

export default function Protectedroutes({ children }){
    const location = useLocation();
    const navigate = useNavigate();
    
    const currentPath = location.pathname.split("/")[1];
    console.log("current path in the protected route is", currentPath)
    const token = localStorage.getItem("dietToken");
    console.log("token inside protectedroute is", token);
    const decoded = decodeJwt(token);
    console.log("decoded jwt in the protected route is", decoded);

    switch(currentPath){
        case "dashboard":
            return (token!==null && decoded.userData.isAdmin === true && decoded.userData.isUser === false) ? children : navigate("/auth/login");

        case "fitness":
            return (token!==null && decoded.userData.isAdmin === false && decoded.userData.isUser === true) ? children : navigate("/");
        default:
            navigate("/")
            return ; 
    }
}