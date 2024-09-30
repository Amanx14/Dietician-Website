import { useNavigate } from "react-router-dom";


const logoutHandler = () => {
    const navigate = useNavigate();
    const removingItem = localStorage.removeItem("dietToken");
    navigate("/");
}

export default logoutHandler;