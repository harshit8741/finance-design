import { NavLink } from "react-router-dom";

export default function News({date, heading, content, img}: any) {
    return (
        <div className="flex bg-[#171f2b] p-4 items-start rounded-xl">
            <div className="flex flex-col gap-1">
                <div className="text-[#2741EE] font-bold">
                    {date}
                </div>
                <div className="font-bold text-xl">
                    {heading}
                </div>
                <div className="text-sm text-slate-300">
                     {content}
                    <NavLink to="/newsread" className="text-[#2741EE] font-bold hover:underline"> read more.</NavLink>
                </div>
            </div>
            <div className="p-2">
                <img
                    src={img}
                    alt="Responsive Image"
                    className="rounded-xl w-44 object-cover aspect-square"
                />
            </div>
        </div>
    );
}
