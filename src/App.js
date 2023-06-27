import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import SearchButton from "./pages/SearchButton"
import Filter from "./pages/filter"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/search" element={<SearchButton />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>
    </>
  )
}

export default App
