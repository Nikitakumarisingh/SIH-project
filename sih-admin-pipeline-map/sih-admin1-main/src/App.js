import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Alert from "./components/Alert";
import Register from "./components/Register";
import Footer from "./components/Footer";
import UploadImage from "./components/UploadImage";
import LineMap from "./components/LineMap";


//styles
import './styles/app.scss'
import './styles/colors.scss'
import './styles/navbar.scss'
import './styles/register.scss'
import './styles/home.scss'
import './styles/about.scss'
import './styles/footer.scss'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/update" element={<Alert />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload_image" element={<UploadImage />} />
        <Route path="/map3" element={<LineMap />} />
      </Routes>
      <Footer />
    </Router>
  )
}