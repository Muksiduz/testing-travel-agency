import { Routes, Route } from "react-router-dom";
import AnimatedLayout from "./layout/AnimatedLayout";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactSection";

import PackageDetails from "./pages/PackageDetails";
import ScrollToTop from "./layout/ScrollToTop";

import Login from "./DASHBOARD/src/pages/Login";
import AdminLayout from "./DASHBOARD/src/layout/AdminLayout";

import ProtectedRoute from "./DASHBOARD/src/components/ProtectedRoutes";
import Bookings from "./DASHBOARD/src/pages/Bookings";
import Reviews from "./DASHBOARD/src/pages/Reviews";
import PackagesAdmin from "./DASHBOARD/src/pages/packages/Packages";

import Dashboard from "./DASHBOARD/src/pages/Dashboard";

import { useEffect } from "react";
import useAuthStore from "./DASHBOARD/src/store/authStore.js";

const App = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AnimatedLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/packages" element={<Packages />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/packages/:id" element={<PackageDetails />} />
        </Route>
        {/* Admin login page */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
          <Route index element={<Dashboard />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="packages" element={<PackagesAdmin />} />

          <Route path="bookings" element={<Bookings />} />

          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
