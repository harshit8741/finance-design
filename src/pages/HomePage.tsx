import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Searchbar from "../components/Searchbar";

export default function Home() {
    return <div className="bg-[#050505] min-h-screen">
        <div className="px-4 py-4">
            <NavBar />
        </div>
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col mt-28 basis-1/2 p-4 gap-10">
                <div className="flex text-white text-5xl font-extrabold items-center justify-center">
                    <div className="flex flex-col gap-2">
                        <div>
                            The Leading Financed
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="flex bg-[#2741EE] rounded-2xl text-3xl p-2 items-center">
                                Trading
                            </div>
                            <div className="">
                                Enterprise within
                            </div>
                        </div>
                        <div>
                            the Industry
                        </div>
                    </div>
                </div>
                <div className="h-14 px-20 mt-10">
                    <Searchbar />
                </div>
            </div>
            <div className="basis-1/2 text-white">
                Harshit
            </div>
        </div>
        <div className="mt-96">
            <Footer />
        </div>
    </div>
}