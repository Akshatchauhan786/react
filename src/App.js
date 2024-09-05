import React, { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";  // Import the Redux store
import Homepage from "./components/Pages/Home/home";
import ContactUs from "./components/Pages/Contact-Us/ContactUs";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import AboutUs from "./components/Pages/About-us/AboutUs";
import NotFound from "./components/Pages/Notfound/notfound";
import Blogpage from "./components/Pages/blogpage/Blogpage";
import SingleBlogPage from "./components/Pages/blogs/SingleBlog";
import PrivacyPolicy from "./components/Pages/privacypolicy/privacypolicy";
import TermAndCondition from "./components/Pages/termandcondition/termandcondition";
import ScrollToTop from "./ScrollToTop";
import Thankyou from "./components/Pages/thankYou/Thankyou";
import Pricing from "./components/Pages/pricing/Pricing";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Header />
          <ScrollToTop/>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/contact' element={<ContactUs />} />
            <Route exact path='/about' element={<AboutUs />} />
            <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route exact path='/blog' element={<Blogpage />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            <Route exact path="/terms" element={<TermAndCondition />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/thankyou" element={<Thankyou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
    </>
  );
}

export default memo(App);
