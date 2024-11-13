import ApexCharts from "apexcharts";
import SideBar from "../components/SideBar";
import { useEffect } from "react";
import DataTable from "../components/DataTable";

export default function Overview() {

    useEffect(() => {
        const options = {
            chart: {
                height: "100%",
                maxWidth: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 6,
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: 0
                },
            },
            series: [
                {
                    name: "New users",
                    data: [9500, 6018, 5006, 6526, 12356, 7456, 7342, 9422, 10831, 6150, 6490, 11043],
                    color: "#1A56DB",
                },
            ],
            xaxis: {
                categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February', '08 February', '09 February', '10 February', '11 February', '12 February', '13 February'],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
        };

        const chartElement = document.getElementById("area-chart");
        if (chartElement) {
            const chart = new ApexCharts(chartElement, options);
            chart.render();
            return () => chart.destroy(); // Cleanup chart on component unmount
        }
    }, []);


    return <div className="flex flex-row bg-[#050505] min-h-screen text-white">
        <div className="fixed">
            <SideBar />
        </div>
        <div className="flex flex-col gap-4 w-full ml-60 px-6">
            <div className="flex justify-between w-full pt-5 backdrop-brightness-0">
                <div className="font-extrabold text-2xl">
                    Overview
                </div>
                <div className="w-10 h-10 rounded-full">
                    <img src="../src/assets/avtar.jpg" className="rounded-full" />
                </div>
            </div>
            <div className="flex flex-col bg-[#0E1218] rounded-2xl p-4">
                <div className="flex gap-4">
                    <div className="basis-1/2">
                        <div className="text-xl font-bold">
                            Tata Motors Ltd.
                        </div>
                        <div className="flex flex-row text-sm gap-4 py-2">
                            <div className="bg-[#1D2025] p-2 rounded-xl text-[#2741EE]">
                                tatamotors.com
                            </div>
                            <div className="flex flex-row gap-2 bg-[#1D2025] p-2 rounded-xl">
                                <div className="text-[#2741EE]">
                                    NSE:
                                </div>
                                <div>
                                    TATAMOTORS
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 bg-[#1D2025] p-2 rounded-xl">
                                <div className="text-[#2741EE]">
                                    BSE:
                                </div>
                                <div>
                                    500570
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1D2025] text-sm rounded-xl py-2 px-4">
                            <div className="font-semibold">
                                Price Summary
                            </div>
                            <div className="flex flex-row gap-4 p-2">
                                <div className="flex flex-col bg-[#17191dc2] basis-1/4 items-center rounded-xl p-2">
                                    <div className="text-green-500">
                                        Today's High
                                    </div>
                                    <div className="font-semibold">
                                        $ 2,751.90
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#17191dc2] basis-1/4 items-center rounded-xl p-2">
                                    <div className="text-red-500">
                                        Today's Low
                                    </div>
                                    <div className="font-semibold">
                                        $ 2,751.90
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#17191dc2] basis-1/4 items-center rounded-xl p-2">
                                    <div className="text-green-500">
                                        52 Week High
                                    </div>
                                    <div className="font-semibold">
                                        $ 2,751.90
                                    </div>
                                </div>
                                <div className="flex flex-col bg-[#17191dc2] basis-1/4 items-center rounded-xl p-2">
                                    <div className="text-red-500">
                                        52 Week Low
                                    </div>
                                    <div className="font-semibold">
                                        $ 2,751.90
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-[#2741EE] mt-2">
                                About
                            </div>
                            <div>
                                <div className="text-sm">
                                    Tata Motors Group is a leading global automobile manufacturer. Part of the illustrious multi-national conglomerate, the Tata group...
                                    <a href="#" className="text-[#2741EE] font-bold hover:underline">readmore.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 bg-[#1D2025] rounded-2xl p-4">
                        <div className="font-semibold">
                            Company Essential
                        </div>
                        <div className="flex flex-row justify-between py-4 text-sm">
                            <div className="flex flex-col gap-5 w-full p-2">
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            Market Cap
                                        </div>
                                        <div className="font-bold">
                                            ₹ 3,26,154 Cr.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#14171F] rounded-xl p-2">
                                    <div className="flex justify-between">
                                        <div>
                                            Stock P/E
                                        </div>
                                        <div className="font-bold">
                                            9.60
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            ROCE
                                        </div>
                                        <div className="font-bold">
                                            20.1 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-full p-2">
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            Current Price
                                        </div>
                                        <div className="font-bold">
                                            ₹ 886
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#14171F] rounded-xl p-2">
                                    <div className="flex justify-between">
                                        <div>
                                            Book Value
                                        </div>
                                        <div className="font-bold">
                                            ₹ 255
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            ROE
                                        </div>
                                        <div className="font-bold">
                                            49.4 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-full p-2">
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            High / Low
                                        </div>
                                        <div className="font-bold">
                                            ₹ 1,179 / 622
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#14171F] rounded-xl p-2">
                                    <div className="flex justify-between">
                                        <div>
                                            Dividend Yield
                                        </div>
                                        <div className="font-bold">
                                            0.34 %
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl p-1">
                                    <div className="flex justify-between">
                                        <div>
                                            Face Value
                                        </div>
                                        <div className="font-bold">
                                            ₹ 2.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl shadow bg-[#0E1218] p-4">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-3xl font-bold text-white pb-2">32.4k</h5>
                        <p className="text-base font-normal text-gray-400">Users this week</p>
                    </div>
                    <div
                        className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
                        12%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div id="area-chart"></div>
                <div className="grid grid-cols-1 items-center border-t border-gray-700 justify-between">
                    <div className="flex justify-between items-center pt-5">
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="lastDaysdropdown"
                            data-dropdown-placement="bottom"
                            className="text-sm font-medium text-gray-400 text-center inline-flex items-center hover:text-white"
                            type="button">
                            Last 7 days
                            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="lastDaysdropdown" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700">
                            <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Yesterday</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Today</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Last 7 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Last 30 days</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Last 90 days</a>
                                </li>
                            </ul>
                        </div>
                        <a
                            href="#"
                            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-500 hover:bg-gray-700 focus:ring-gray-700 border-gray-700 px-3 py-2">
                            Users Report
                            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#0E1218] rounded-2xl p-4">
                <DataTable data={[
                    ["Cash from Operating Activity", "26,633", "29,001", "14,283", "35,388", "67,915"],
                    ["Cash from Investing Activity", "-33,115", "-25,672", "-4,444", "-15,417", "-22,782"],
                    ["Cash from Financing Activity", "3,390", "9,904", "-3,380", "-26,243", "-37,006"],
                    ["Net Cash Flow", "-3,092", "13,232", "6,459", "-6,272", "8,128"],
                ]} years={["Mar 2020", "Mar 2021", "Mar 2022", "Mar 2023", "Mar 2024"]}
                    name={"Profit & Loss"} />
            </div>
            <div className="flex flex-col bg-[#0E1218] rounded-2xl p-4">
                <DataTable data={[
                    ["Promoters", "46.38%", "46.37%", "46.36%", "46.36%", "42.58%"],
                    ["FIIs", "18.40%", "18.62%", "19.20%", "18.18%", "20.54%"],
                    ["DIIs", "17.37%", "17.25%", "16.01%", "15.93%", "16.08%"],
                    ["Government", "0.14%", "0.14%", "0.14%", "0.14%", "0.29%"],
                    ["Public", "17.70%", "17.60%", "18.31%", "19.39%", "20.49%"],
                ]} years={["Sep 2023", "Dec 2023", "Mar 2024", "Jun 2024", "Sep 2024"]}
                    name={"Shareholding Pattern"} />
            </div>
            <div className="flex flex-col bg-[#0E1218] rounded-2xl p-4">
                <DataTable data={[
                    ["Sales", "102,236", "105,128", "110,577", "119,986", "108,048"],
                    ["Expenses", "89,019", "91,361", "95,159", "102,851", "92,263"],
                    ["Operating Profit", "13,217", "13,767", "15,418", "17,135", "15,785"]
                ]} years={["Jun 2023", "Sep 2023", "Dec 2023", "Mar 2024", "Jun 2024"]}
                    name={"Quarterly Results"} />
            </div>
        </div>
    </div>
}