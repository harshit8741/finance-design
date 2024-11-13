// import { NavLink } from "react-router-dom"

export default function NavBar() {
    return <div className="flex flex-row justify-between items-center bg-[#0E1218] rounded-2xl px-6 py-4">
        <div className="text-[#2741EE] font-extrabold text-2xl">
            OptiTrade
        </div>
        <div className="flex flex-row gap-4 text-white text-sm">
            <div className="cursor-pointer transition-all duration-500 hover:text-[#2741EE]">
                Home
            </div>
            <div className="cursor-pointer transition-all duration-500 hover:text-[#2741EE]">
                Dashboard
            </div>
            <div className="cursor-pointer transition-all duration-500 hover:text-[#2741EE]">
                Market
            </div>
            <div className="cursor-pointer transition-all duration-500 hover:text-[#2741EE]">
                News
            </div>
        </div>
        <div className="w-9 h-9 rounded-full">
            <img src="../src/assets/avtar.jpg" className="rounded-full" />
        </div>
    </div>
}