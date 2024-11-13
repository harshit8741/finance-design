export default function DataTable({years, data, name}: any) {
    // const data = ;

    // const years = ;

    return (
        <div className="bg-[#0E1218]">
            <div className="text-xl font-bold">
                {name}
            </div>
            <p className="text-gray-400 text-sm mb-4">Consolidated Figures in Rs. Crores / <a href="#" className="text-[#2741EE] hover:underline">View Standalone</a></p>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left text-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-3 px-4"></th>
                            {years.map((year: any, index: any) => (
                                <th key={index} className="py-3 px-4 font-medium text-sm text-gray-400">{year}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row: any, rowIndex: any) => (
                            <tr
                                key={rowIndex}
                                className={`${rowIndex % 2 === 0 ? "bg-[#0E1218]" : "bg-[#000000]"} ${rowIndex === data.length - 1 ? "text-sm" : "text-sm"}`}
                            >
                                <td className="py-3 px-4 text-[#2741EE]">{row[0]}</td>
                                {row.slice(1).map((value: any, valueIndex: any) => (
                                    <td key={valueIndex} className="py-3 px-4 text-gray-300">{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
