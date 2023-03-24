import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Announcement from "./adminComponent/announcementComponent/announcement";
import Category from "./adminComponent/categoryComponent/category";
import ContactUs from "./adminComponent/contactComponent/ContactUs";
import Content from "./adminComponent/contentComponent/content";
import Dashboard from "./adminComponent/dashboardComponent/dashboard";
import RecentOrders from "./adminComponent/dashboardComponent/recentOrders";
import Banner from "./adminComponent/homeScreenBannerComponent/banner";
import Informations from "./adminComponent/informationComponent/Information";
import ChangePassword from "./adminComponent/loginComponent/changePassword";
import EditProfile from "./adminComponent/loginComponent/editProfile";
import ForgotPassword from "./adminComponent/loginComponent/forgotPassword";
import Language from "./adminComponent/loginComponent/language";
import Login from "./adminComponent/loginComponent/login";
import OtpVerify from "./adminComponent/loginComponent/otpVerify";
import ResetPassword from "./adminComponent/loginComponent/resetPassword";
import Notification from "./adminComponent/notificationComponent/notification";
import Offer from "./adminComponent/offerComponent/offer";
import OfferDetails from "./adminComponent/offerComponent/offerDetails";
import OfferDisable from "./adminComponent/offerComponent/offerDisable";
import OfferEnable from "./adminComponent/offerComponent/offerEnable";
import Order from "./adminComponent/ordersComponent/order";
import OrderDetails from "./adminComponent/ordersComponent/orderDetails";
import Report from "./adminComponent/reportComponent/report";
import Staff from "./adminComponent/staffComponent/staff";
import Support from "./adminComponent/supportComponent/support";
import Thoughts from "./adminComponent/thoughtsComponent/thoughts";
import Transaction from "./adminComponent/transactionComponent/transaction";
import TransactionDetails from "./adminComponent/transactionComponent/transactionDetails";
import { MapContainer } from "./adminComponent/userManagement/mapComponent";
import User from "./adminComponent/userManagement/user";
import UserDetails from "./adminComponent/userManagement/userDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/otp-verification" element={<OtpVerify />} />
        <Route path="/admin/reset-password" element={<ResetPassword />} />
        <Route path="/admin/edit-profile" element={<EditProfile />} />
        <Route path="/admin/change-password" element={<ChangePassword />} />
        <Route path="/admin/select-language" element={<Language />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/recent-orders-details" element={<RecentOrders />} />
        <Route path="/admin/users-management" element={<User />} />
        <Route path="/admin/user-details" element={<UserDetails />} />
        <Route path="/admin/category-management" element={<Category />} />
        <Route path="/admin/offer-management" element={<Offer />} />
        <Route path="/admin/offer-details" element={<OfferDetails />} />
        <Route
          path="/admin/offer-management-enable"
          element={<OfferEnable />}
        />
        <Route
          path="/admin/offer-management-disable"
          element={<OfferDisable />}
        />
        <Route path="/admin/offer-details" element={<OfferDetails />} />
        <Route path="/admin/order-management" element={<Order />} />
        <Route path="/admin/order-details" element={<OrderDetails />} />
        <Route path="/admin/staff-management" element={<Staff />} />
        <Route path="/admin/transaction-management" element={<Transaction />} />
        <Route
          path="/admin/transaction-details"
          element={<TransactionDetails />}
        />
        <Route path="/admin/report-management" element={<Report />} />
        <Route
          path="/admin/home-screen-banner-management"
          element={<Banner />}
        />
        <Route
          path="/admin/notification-management"
          element={<Notification />}
        />
        <Route
          path="/admin/announcement-management"
          element={<Announcement />}
        />
        <Route path="/admin/thoughts-management" element={<Thoughts />} />
        <Route path="/admin/content-management" element={<Content />} />
        <Route path="/admin/informations" element={<Informations />} />
        <Route path="/admin/contact-us" element={<ContactUs />} />
        <Route path="/admin/help-support-management" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
