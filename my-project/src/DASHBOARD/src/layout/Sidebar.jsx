import {
  LayoutDashboard,
  Package,
  CalendarCheck,
  Star,
  Globe,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore"; // adjust the path if needed

const menuItems = [
  {
    name: "Packages",
    path: "/admin/packages",
    icon: Package,
  },
  {
    name: "Bookings",
    path: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    name: "Reviews",
    path: "/admin/reviews",
    icon: Star,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/admin/login"); // Change this if your login route is different
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b px-8 py-8">
        <h1 className="text-3xl font-bold text-emerald-600">NE Way</h1>

        <p className="mt-1 text-sm text-slate-500">Travel Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-3 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }>
              <Icon size={22} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom */}
      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-4 rounded-2xl px-5 py-3 text-red-500 transition hover:bg-red-50">
        <LogOut size={22} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
