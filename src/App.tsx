import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Overview from "./pages/OverviewPage"
import AuthPage from "./pages/AuthPage"
import Market from "./pages/MarketPage"
import News from "./pages/NewsPage"

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
