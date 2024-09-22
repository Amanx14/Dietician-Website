import { useNavigate } from "react-router-dom";


const logoutHandler = () => {
    const navigate = useNavigate();
    const removingItem = localStorage.removeItem("dietToken");
    console.log("removing item", removingItem);
    navigate("/");
}

export default logoutHandler;