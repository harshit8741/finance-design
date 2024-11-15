import { NavLink } from "react-router-dom";

export default function AuthPage () {
    return <div className="bg-[#050505] flex flex-col justify-center h-screen">
        <div className="text-white flex flex-row justify-center">
            Auth
        </div>
        <div>
            <NavLink to="/overview" className="bg-white">
                Overview
            </NavLink>
        </div>
    </div>
}