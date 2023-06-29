import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MyPage from "./pages/MyPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Scroll from "./components/Button/Scroll.jsx";
import Header from "./components/Header/Header.jsx";
import Style from "./pages/Style.jsx";
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Join from "./pages/Join.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/style" element={<Style />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
        <Scroll />
      </BrowserRouter>
    </>
  );
};

export default App;
