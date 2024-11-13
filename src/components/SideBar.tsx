import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function SideBar() {
    return <div className="flex flex-col min-h-screen justify-between bg-[#0E1218] w-60 rounded-r-3xl border-r-[#151b24] border-r-2">
        <div>
            <div className="flex justify-center">
                <div className="text-[#2741EE] font-extrabold text-3xl mt-4">
                    OptiTrade
                </div>
            </div>
            <div className="p-2 mt-4 h-12">
                <Searchbar />
            </div>
            <div className="text-white text-xs mr-2 ml-2 mt-4">
                <ul className="flex flex-col gap-6">
                    <li className="flex item-center w-full">
                        <NavLink to="/home" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Home
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/overview" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] h-8 w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Overview
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/market" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Market
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/news" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                </svg>
                            </div>
                            <div className="my-1">
                                News
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/notification" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                            </div>
                            <div className="my-1">
                                Notification
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <div className="border-t-2 m-4 mt-10 border-gray-600"></div>
            </div>
        </div>
        <div>
            <div className="text-white text-xs mx-2 my-4">
                <ul className="flex flex-col gap-6">
                    <li className="flex item-center w-full">
                        <NavLink to="/help" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>

                            </div>
                            <div className="my-1">
                                Help
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/setting" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] h-8 w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>


                            </div>
                            <div className="my-1">
                                Setting
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex item-center w-full">
                        <NavLink to="/authpage" className={({ isActive }) => isActive
                            ? "flex flex-row items-center text-white rounded bg-[#2741EE] w-full pl-2"
                            : "flex flex-row items-center text-white rounded pl-2"
                        }>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="size-4 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>


                            </div>
                            <div className="my-1">
                                SignOut
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}