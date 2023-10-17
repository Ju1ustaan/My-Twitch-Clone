import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Popular from "./pages/Popular/Popular"
import Layout from "./Routes/Layout"
import Login from "./Routes/Login"
import StreamPage from "./pages/Stream/StreamPage"


const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/stream' element={<StreamPage />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
