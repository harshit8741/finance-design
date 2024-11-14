import News from "../components/News";
import SideBar from "../components/SideBar";

export default function NewsPage() {
    return <div className="flex flex-row bg-[#050505] min-h-screen text-white">
        <div className="fixed">
            <SideBar />
        </div>
        <div className="flex flex-col gap-4 w-full ml-60 px-6">
            <div className="flex justify-between w-full pt-5 backdrop-brightness-0">
                <div className="font-extrabold text-2xl">
                    News
                </div>
                <div className="w-10 h-10 rounded-full">
                    <img src="../src/assets/avtar.jpg" className="rounded-full" />
                </div>
            </div>
            <div className="flex flex-col px-32 gap-4">
                <News date={"Oct 31, 2024 01:35"} heading={"Mizuho Q2 profit jumps 62%, outlook raised as rate hikes boost margins"}
                    content={"Reliance New Energy (RNEL), a wholly-owned subsidiary of Reliance Industries, has acquired the remaining stake in sodium ion battery technology company Faradion from existing shareholders, making it a wholly-owned subsidiary, according to a stock exchange filing dated October 29"}
                    img={"../src/assets/news-img-1.jpg"} />
                <News date={"Nov 12, 2023 04:28"} heading={"Zomato share price jumps over 4% following F&O inclusion, rival Swiggy's listing"}
                    content={"The NSE announced yesterday the addition of 45 new stocks to its F&O segment, including prominent names like Food delivery and quick commerce major Zomato, Avenue Supermarts, BSE, Paytm and key Adani Group companies, after receiving approval from the Securities and Exchange Board of India (SEBI)"}
                    img={"../src/assets/news-img-2.jpg"} />
                <News date={"Jan 03, 2023 03:39"} heading={"Gautam Adani plans to invest $10 billion in US energy, infrastructure to create up to 15,000 jobs"}
                    content={"Adani congratulated President-elect Donald Trump on his victory, and underscored that the partnership between both nations are deepening, with the group looking at 'leveraging its global expertise' in projects in America that will ensure energy security and and resilient infrastructure"}
                    img={"../src/assets/news-img-3.jpeg"} />
                <News date={"Feb 18, 2019 15:19"} heading={"Swiggy shares in red a day after making an impressive debut with 7% gains"}
                    content={"In the early trade, the stock extended gains on the second consecutive day on Thursday, rising over 7 percent intraday. However, shortly after it slipped into negative territory quoting at Rs 450.25 per share on the NSE, down 1.26 percent at around 10.30 am"}
                    img={"../src/assets/news-img-4.jpg"} />
                <News date={"April 22, 2022 10:46"} heading={"Stock Market LIVE Updates: Sensex down 170 pts, Nifty around 23,500; Bharat Forge Q2 profit up at Rs 361.1cr"}
                    content={"Sensex Today | Stock Market LIVE Updates: BSE Midcap index up 0.6 percent and smallcap index up 1 percent. BPCL, ITC, Adani Ports, HUL and Tata Consumer are among the top losers on the Nifty, while gainers are Eicher Motors, Hero MotoCorp, Reliance Industries, HDFC Life and Kotak Mahindra Bank. Among sectors, oil & gas and FMCG down 0.5-1 percent, while auto, heathcare, realty, media up 0.5-1.5 percent"}
                    img={"../src/assets/news-img-2.jpg"} />
                <News date={"June 01, 2021 06:59"} heading={"Stock Radar: Bajaj Auto, L&T Technology, Rail Vikas Nigam, Bikaji Foods, Oriana Power, Pondy Oxide in focus on Thursday"}
                    content={"Let's catch up on the latest news from the stock market. From significant investments to major deals, quarterly earnings, and appointments, here's a quick look at which stocks will be in focus in"}
                    img={"../src/assets/news-img-1.jpg"} />
            </div>
        </div>
    </div>
}