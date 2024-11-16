import DataTable from "../components/DataTable";
import SideBar from "../components/SideBar";

export default function Market() {
    return <div className="flex flex-row bg-[#050505] min-h-screen text-white">
        <div className="fixed">
            <SideBar />
        </div>
        <div className="flex flex-col gap-4 w-full ml-60 px-4">
            <div className="flex justify-between w-full pt-5 backdrop-brightness-0">
                <div className="font-extrabold text-2xl">
                    Market Dashboard
                </div>
                <div className="w-10 h-10 rounded-full">
                    <img src="../src/assets/avtar.jpg" className="rounded-full" />
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="bg-[#0E1218] w-full rounded-2xl p-1 text-[#2741EE]">
                    <div className="flex">
                        <div className="basis-2/3 border-r-2 m-2 my-2 border-[#222223]">
                            <div className="m-2">
                                <div className="flex justify-between p-1">
                                    <div className="font-bold">
                                        Indexes
                                    </div>
                                    <div className="font-bold hover:underline hover:cursor-pointer">
                                        See All
                                    </div>
                                </div>
                                <div className="overflow-hidden relative w-full p-2">
                                    <div className="flex flex-wrap gap-3 text-sm font-medium justify-center">
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Nifty 50
                                            </div>
                                            <div className="text-white">
                                                21,392.27
                                            </div>
                                            <div className="text-green-500">
                                                +20.45 (32.4%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                SENSEX
                                            </div>
                                            <div className="text-white">
                                                15,302.10
                                            </div>
                                            <div className="text-green-500">
                                                +15.25 (12.4%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                BANK NIFTY
                                            </div>
                                            <div className="text-white">
                                                17,392.70
                                            </div>
                                            <div className="text-red-500">
                                                -03.45 (02.4%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Nifty 100
                                            </div>
                                            <div className="text-white">
                                                20,302.91
                                            </div>
                                            <div className="text-green-500">
                                                +13.05 (12.6%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                NIFTYMIDCAP
                                            </div>
                                            <div className="text-white">
                                                54,043.10
                                            </div>
                                            <div className="text-green-500">
                                                +242.15 (0.45%)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-t-2 m-4 my-5 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                            </div>
                            <div className="m-2">
                                <div className="flex justify-between p-1">
                                    <div className="font-bold">
                                        Today's Gainers
                                    </div>
                                    <div className="font-bold hover:underline hover:cursor-pointer">
                                        See All
                                    </div>
                                </div>
                                <div className="overflow-hidden relative w-full p-2">
                                    <div className="flex flex-wrap gap-3 text-sm font-medium justify-center">
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Tech Mahindra
                                            </div>
                                            <div className="text-white">
                                                $1,285.00
                                            </div>
                                            <div className="text-green-500">
                                                +17.40 (5.04%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Bajaj Auto
                                            </div>
                                            <div className="text-white">
                                                $3706.75
                                            </div>
                                            <div className="text-green-500">
                                                +66.15 (1.84%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Havells India
                                            </div>
                                            <div className="text-white">
                                                $1,118.70
                                            </div>
                                            <div className="text-green-500">
                                                +15.45 (1.32%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Tata Power
                                            </div>
                                            <div className="text-white">
                                                $190.20
                                            </div>
                                            <div className="text-green-500">
                                                +4.75 (2.56%)
                                            </div>
                                        </div>
                                        <div className="w-36 h-20 bg-[#0b0b0b] rounded-lg flex flex-col gap-1 p-4 justify-center">
                                            <div className="text-gray-500">
                                                Vedanta
                                            </div>
                                            <div className="text-white">
                                                530.60
                                            </div>
                                            <div className="text-green-500">
                                                +1.32 (5.45%)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-t-2 m-4 my-5 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                            </div>
                            <div className="m-2">
                                <div className="flex flex-col bg-[#0E1218] rounded-2xl p-4">
                                    <DataTable data={[
                                        ["Swigy", "26,633", "29,001", "14,283", "35,388", "67,915"],
                                        ["Garware Hi-Tech", "-33,115", "-25,672", "-4,444", "-15,417", "-22,782"],
                                        ["HCL Tech.", "3,390", "9,904", "-3,380", "-26,243", "-37,006"],
                                        ["Pix Transmission", "-3,092", "13,232", "6,459", "-6,272", "8,128"],
                                    ]} years={["Mar 2020", "Mar 2021", "Mar 2022", "Mar 2023", "Mar 2024"]}
                                        name={"52 Week High/Low"} />
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3">
                            <div className="m-2">
                                <div className="flex justify-between p-1">
                                    <div className="font-bold">
                                        Your Watchlist
                                    </div>
                                    <div className="font-bold hover:underline hover:cursor-pointer">
                                        See All
                                    </div>
                                </div>
                                <div className="text-white font-semibold text-sm px-4 py-2 border-2 rounded-xl border-neutral-600">
                                    <div className="flex justify-between">
                                        <div className="font-bold">
                                            Company Name
                                        </div>
                                        <div className="font-bold hover:underline hover:cursor-pointer">
                                            Market Price
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-t-2 my-2 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                                    </div>
                                    <div className="flex justify-between text-sm font-normal">
                                        <div className="content-center">
                                            Relaince Industries Ltd.
                                        </div>
                                        <div className="">
                                            $245.60<div className="text-green-500">(+1.32%)</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-t-2 my-2 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                                    </div>
                                    <div className="flex justify-between text-sm font-normal">
                                        <div className="content-center">
                                            ITC (India)
                                        </div>
                                        <div className="">
                                            $380.60<div className="text-green-500">(+3.22%)</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="border-t-2 my-2 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                                    </div>
                                    <div className="flex justify-between text-sm font-normal">
                                        <div className="content-center">
                                            Tata Energy
                                        </div>
                                        <div className="">
                                            $220.60<div className="text-red-500">(-1.50%)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-t-2 my-5 border-[#222223]" style={{ boxShadow: '0 0 100px 1px #2741EE' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
}