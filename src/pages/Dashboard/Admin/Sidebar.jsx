import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Links() {

  const navigate = useNavigate();
  
  return (
        <>
          <div className="px-8 py-3">
            <h4 className="opacity-80 ">Analytics</h4>

            <NavLink
              
              className="flex items-center py-2 text-lg hover:text-indigo-700"
              to=""
            >
              {({ isActive }) => (
                <>
                  <i className="ai ai-house-line-fill mr-3 text-2xl text-emerald-600"></i>
                  Home
                  <i
                    className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}
                  ></i>
                </>
              )}
            </NavLink>

            <NavLink
              
              className="flex items-center py-2 text-lg hover:text-indigo-700"
              to="users"
            >
              {({ isActive }) => (
                <>
                  <i className="ai ai-chart-line-up-fill mr-3 text-2xl text-amber-400"></i>
                  Users
                  <i
                    className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}
                  ></i>
                </>
              )}
            </NavLink>
          </div>

          <div className="px-8 py-3">
            <h4 className="opacity-80 ">Manage</h4>
            <NavLink
              
              className={"flex items-center py-2 text-lg hover:text-indigo-700"}
              to="requests"
            >
              {({ isActive }) => (
                <>
                  <i className="ai ai-hands-clapping-fill mr-3 text-2xl text-rose-400"></i>{" "}
                  Requests
                  <i
                    className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}
                  ></i>
                </>
              )}
            </NavLink>
            <NavLink
              
              className={"flex items-center py-2 text-lg hover:text-indigo-700"}
              to="notifications"
            >
              {({ isActive }) => (
                <>
                  <i className="ai ai-bell-ringing-fill mr-3 text-2xl text-blue-600"></i>{" "}
                  Notifications
                  <i
                    className={isActive ? "ai ai-arrow-right ml-3" : "hidden"}
                  ></i>
                </>
              )}
            </NavLink>
          </div>

          <div className="px-8 py-3">
            <h4 className="opacity-80 ">Other Actions</h4>

            
            <button
              className="flex items-center py-2 text-lg hover:text-indigo-700"
              to="logout"
              onClick={() =>  {
                localStorage.removeItem("dietToken");
                navigate("/");
              }}
            >
              <i className="ai ai-arrow-square-out-fill mr-3 text-2xl text-orange-400"></i>
              Log Out
             </button>
          </div>
        </>
      
       
      
    
  );
}

// stone https://static.vecteezy.com/system/resources/previews/035/242/743/non_2x/ai-generated-easter-island-rock-moai-statue-isolated-on-transparent-background-free-png.png
// boy https://static.vecteezy.com/system/resources/previews/019/900/306/non_2x/happy-young-cute-illustration-face-profile-png.png
// girl https://static.vecteezy.com/system/resources/previews/019/900/348/non_2x/happy-young-cute-illustration-face-profile-png.png

function Sidebar() {
  // const [toggle, setToggle] = useState(open);
  // // console.log("navbar open", open, "navbar toggle", toggle, Math.random());

  // const userName = sessionStorage.getItem("userName");

  // function closeNavbar() {
  //   setToggle(!toggle);
  // }

  // useEffect(() => {
  //   closeNavbar();
  // }, [open]);

  return (
    <nav
      className={
           "hidden animate-slide relative z-10 min-h-svh max-w-80 bg-slate-950 text-white shadow-l lg:h-full lg:block lg:sticky lg:left-0 lg:top-0 lg:animate-none"
          // "hidden min-h-svh max-w-80 rounded-3xl bg-white shadow-lg lg:sticky lg:left-0 lg:top-0 lg:block"
      }
    >
      <button
        className="text-red absolute right-4 top-4 lg:hidden"
        
      >
        <i className="ai ai-x-bold text-2xl"></i>
      </button>
      <div className="flex items-center p-4 pt-6">
        <img
          className="bg-slate-10 mx-2 h-16 w-16 rounded-full border"
          src="https://static.vecteezy.com/system/resources/previews/019/900/306/non_2x/happy-young-cute-illustration-face-profile-png.png"
          alt="profile"
        />
        <div className="mx-2">
          <h3 className="font-heading text-sm">Welcome,</h3>
          <h3 className="font-paragraph text-xl"> Admin</h3>
        </div>
      </div>
      <hr />
      <Links />
    </nav>
  );
}

export default Sidebar;
